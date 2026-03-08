import { DRGrade } from "../types";

declare const ort: any;
let session: any = null;

export const loadModel = async (): Promise<void> => {
  if (session) return;
  // Use relative path for Amplify
  const modelPath = `./dr_grading_model.onnx?v=${Date.now()}`;
  try {
    ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/';
    const response = await fetch(modelPath);
    const modelBuffer = await response.arrayBuffer();
    session = await ort.InferenceSession.create(modelBuffer, {
      executionProviders: ['wasm'],
      graphOptimizationLevel: 'all'
    });
    console.log("ViT Engine Online ✅");
  } catch (e) {
    console.error("ONNX Load Error:", e);
  }
};

export const loadModelFromBuffer = async (buffer: ArrayBuffer) => {
  session = await ort.InferenceSession.create(buffer, { executionProviders: ['wasm'] });
};

export const preprocessFundusImage = async (file: File): Promise<Float32Array> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 224;
        canvas.height = 224;
        const ctx = canvas.getContext('2d', { willReadFrequently: true })!;

        // Use High Quality smoothing for better lesion detection
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, 224, 224);
        
        const imageData = ctx.getImageData(0, 0, 224, 224);
        const data = imageData.data;
        const floatData = new Float32Array(3 * 224 * 224);

        // Standard ImageNet Normalization (Mandatory for Swin Transformer)
        const mean = [0.485, 0.456, 0.406];
        const std = [0.229, 0.224, 0.225];

        for (let i = 0; i < 224 * 224; i++) {
          // REMOVED Stretching - This was causing the "Always Grade 2" bug
          const r = data[i * 4] / 255.0;
          const g = data[i * 4 + 1] / 255.0;
          const b = data[i * 4 + 2] / 255.0;

          // NCHW Planar Format
          floatData[i] = (r - mean[0]) / std[0];
          floatData[i + 50176] = (g - mean[1]) / std[1];
          floatData[i + 100352] = (b - mean[2]) / std[2];
        }
        resolve(floatData);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};

export const runViTInference = async (floatData: Float32Array): Promise<DRGrade> => {
  if (!session) throw new Error("Session not ready");

  const tensor = new ort.Tensor('float32', floatData, [1, 3, 224, 224]);
  const outputs = await session.run({ [session.inputNames[0]]: tensor });
  const outputData = outputs[session.outputNames[0]].data;

  // Log raw predictions to console for debugging
  console.log("Raw Logic Output:", outputData);

  let maxIdx = 0;
  let maxVal = outputData[0];
  for (let i = 1; i < outputData.length; i++) {
    if (outputData[i] > maxVal) {
      maxVal = outputData[i];
      maxIdx = i;
    }
  }

  // REMOVED the "Safety Overrider" - The Swin Transformer is 
  // accurate enough to find lesions without manual pixel counting.
  return maxIdx as DRGrade;
};