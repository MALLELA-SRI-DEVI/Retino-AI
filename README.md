# 👁️ Retino-AI

### AI-Powered Diabetic Retinopathy Screening for Bharat

🚀 **AWS AI for Bharat Hackathon – Prototype Phase Submission**

---

## 📌 Overview

**Retino-AI** is an AI-powered retinal screening system designed to detect and grade **Diabetic Retinopathy (DR)** using advanced deep learning models.

Our project **Swin-DR** leverages **Swin Transformer-based vision models** to automatically analyze retinal fundus images and classify them into **5 clinical stages of Diabetic Retinopathy**.

The goal is to **bridge the ophthalmology gap in rural India**, enabling **ASHA workers and primary healthcare centers** to perform early retinal screening using low-cost devices.

---

## 🚨 Problem Statement

India has over **77 million diabetic patients**, yet there is a **severe shortage of ophthalmologists**, especially in rural areas.

Challenges include:

* Limited access to retinal specialists
* Late diagnosis leading to **preventable blindness**
* Lack of automated screening tools in rural healthcare systems
* Language barriers in medical reporting

---

## 💡 Proposed Solution

Retino-AI provides an **AI-powered automated screening platform** that:

1. Accepts **retinal fundus images**
2. Uses **Swin Transformer architecture** to analyze retinal patterns
3. Automatically **grades Diabetic Retinopathy into 5 stages**
4. Generates **instant diagnostic reports**
5. Enables **early referrals to specialists**

This allows **community healthcare workers to screen patients instantly** without needing expert ophthalmologists on-site.

---

## 🧠 Core AI Technology

### Swin Transformer (Swin-DR)

Unlike traditional CNN architectures, **Swin Transformers** use **shifted window attention** to capture hierarchical features in medical images.

### Why Swin Transformers?

* 🔬 Detects **tiny microaneurysms and retinal lesions**
* 🧠 Captures **fine-grained medical image features**
* ⚡ **Linear computational complexity**
* 📱 Suitable for **mobile and edge deployment**

This makes the model ideal for **high-resolution medical imaging in low-resource environments**.

---

# ☁️ AWS Powered Architecture (Hackathon Highlight)

Our entire prototype is designed around the **AWS Cloud Ecosystem** to ensure **scalability, reliability, and rapid deployment**.

## AWS Services Used

### 1️⃣ AWS Amplify

* Used for **hosting the web application**
* Provides **CI/CD pipeline for rapid deployments**
* Ensures **high availability and global CDN delivery**

✅ **Live Web App Hosted on AWS Amplify**

---

### 2️⃣ Amazon S3

* Secure storage for:

  * Fundus retinal images
  * Model artifacts
  * Training datasets
* Enables scalable medical image storage.

---

### 3️⃣ Amazon EC2 / GPU Instances

* Used for **training and inference of Swin Transformer models**
* Supports high-performance **deep learning workloads**

---

### 4️⃣ AWS SageMaker *(Planned / Future Phase)*

Will be used for:

* Model training pipelines
* Hyperparameter tuning
* Model versioning
* Scalable inference endpoints

---

### 5️⃣ AWS CloudFront

Ensures:

* Fast content delivery
* Low latency access to the application across India.

---

## 🏗️ System Architecture

```
User / ASHA Worker
        │
        ▼
Mobile/Web App (AWS Amplify)
        │
        ▼
Upload Fundus Image
        │
        ▼
Amazon S3 Storage
        │
        ▼
AI Model Inference (EC2 / SageMaker)
        │
        ▼
Swin Transformer DR Classification
        │
        ▼
Diagnosis + Stage Prediction
        │
        ▼
Medical Report & Referral
```

---

## 🔍 Features

* 🧠 **AI-based retinal disease detection**
* 📊 **5-stage Diabetic Retinopathy classification**
* ⚡ **Instant diagnosis**
* 🌍 **Accessible in rural healthcare centers**
* 📱 **Mobile-friendly interface**
* ☁️ **Fully cloud-enabled using AWS**
* 🏥 **Early referral recommendation system**

---

## 📈 Prototype Performance

Current prototype demonstrates:

* High accuracy in DR classification
* Efficient processing of high-resolution retinal images
* Scalable deployment through AWS infrastructure

Further benchmarking and model optimization are ongoing.

---

## 💻 GitHub Repository

Source Code:
https://github.com/MALLELA-SRI-DEVI/Retino-AI

---

## 🎥 Demo Video

Watch the **End-to-End Demonstration**:

https://youtu.be/mRD5YfKlFSI

---

## 🇮🇳 Impact for Bharat

Retino-AI aligns with **Ayushman Bharat Digital Mission (ABDM)** and supports India's public healthcare infrastructure.

### Key Impact

👁️ **Early Detection**

* Identifies Stage 1 Diabetic Retinopathy before vision loss.

🏥 **Rural Healthcare Support**

* Enables screening by **ASHA workers and primary health centers**.

🌐 **Accessible Diagnostics**

* Reduces dependency on specialist availability.

⚡ **Rapid Development Using AWS**

* Cloud infrastructure allowed **2× faster prototype development**.

---

## 🔮 Future Development

Planned improvements include:

* Integration with **AWS SageMaker for automated ML pipelines**
* Multi-language medical report generation
* Mobile offline inference capability
* Integration with **Ayushman Bharat Digital Health ID**
* Deployment in **Primary Health Centers (PHCs)** across rural India

---

## 👩‍💻 Team

**Team Name:** Retino-AI

---

## 🏆 Project Vision

By combining **AI-powered retinal diagnostics with AWS cloud scalability**, Retino-AI aims to create a **national-level retinal screening platform** capable of serving **millions of diabetic patients across Bharat**.

---

⭐ If you find this project impactful, please **star the repository** and support the mission to prevent **avoidable blindness in India**.
