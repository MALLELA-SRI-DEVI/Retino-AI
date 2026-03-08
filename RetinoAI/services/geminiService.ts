import { DRGrade, Language } from "../types";

// Vite uses import.meta.env, NOT process.env
// We also hardcode the fallback URL here to ensure the build never fails on Amplify
const API_BASE_URL = import.meta.env.VITE_API_GATEWAY_URL || "https://hennhp58mb.execute-api.ap-south-1.amazonaws.com";

export const getMedicalExplanation = async (grade: DRGrade) => {
  // Check if URL exists
  if (!API_BASE_URL) {
    throw new Error("Gateway URL missing. Please check your .env file or hardcode the URL.");
  }

  const response = await fetch(`${API_BASE_URL}/explain`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ grade }) 
  });

  if (!response.ok) {
    // Try to get error message from backend
    const errText = await response.text();
    let errorMessage = "Backend Error";
    try {
        const errData = JSON.parse(errText);
        errorMessage = errData.error || errorMessage;
    } catch(e) {
        errorMessage = errText || errorMessage;
    }
    throw new Error(errorMessage);
  }

  return await response.json();
};

export const speakText = async (text: string, language: string) => {
  // Using the same base URL for consistency
  try {
    const response = await fetch(`${API_BASE_URL}/speak`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, language }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Backend Error");
    }

    const data = await response.json();
    if (data.audio) {
      // Direct play from Base64 string
      const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
      return await audio.play();
    }
  } catch (error) {
    console.error("Audio Critical Error:", error);
    throw error;
  }
};