# Requirements Document

### 1. Introduction

Diabetic Retinopathy (DR) is a diabetes-related eye disease and a leading cause of blindness in India due to late diagnosis. This document specifies the requirements for an AI-based screening system that assists in early detection of diabetic retinopathy using retinal fundus images, especially for use in rural and resource-limited healthcare settings. The system leverages a Swin Transformer-based deep learning model to classify disease severity and provide timely screening results. This system is intended as a screening tool to assist medical professionals, not as a final diagnostic authority.

---

### 2. Objectives
- Enable early detection of diabetic retinopathy using AI
- Assist ophthalmologists and general physicians in diagnosis
- Reduce preventable vision loss through timely referrals
- Provide an affordable, scalable screening solution for India

---

### 3. Stakeholders
- Diabetic patients
- Ophthalmologists
- Primary healthcare workers
- Clinics and hospitals
- Government and public health organizations

---

### 4. Functional Requirements

#### FR1: Image Upload
- The system shall allow users to upload retinal fundus images.
- Supported formats: JPG, PNG, JPEG.

#### FR2: Image Preprocessing
- The system shall automatically preprocess images (resizing, normalization, noise reduction).

#### FR3: AI-Based Prediction
- The system shall analyze images using a trained deep learning model.
- The system shall classify results into:
  - No DR
  - Mild DR
  - Moderate DR
  - Severe DR
  - Proliferative DR

#### FR4: Result Display
- The system shall display prediction results with confidence scores.
- The system shall provide visual indicators (e.g., severity level).

#### FR5: Report Generation
- The system shall generate a basic screening report.
- The report shall include recommendations for further medical consultation.

#### FR6: User Roles
- The system shall support:
  - Patient/User
  - Healthcare Worker
  - Admin

---

### 5. Non-Functional Requirements

#### NFR1: Accuracy
- The model should achieve clinically acceptable accuracy (≥85%).

#### NFR2: Performance
- Prediction results should be generated within 5 seconds per image.

#### NFR3: Scalability
- The system should support increasing user load without performance degradation.

#### NFR4: Usability
- The interface should be simple and usable by non-technical healthcare workers.

#### NFR5: Availability
- The system should be available 24/7 with minimal downtime.

---

### 6. Data Requirements
- High-quality labeled retinal fundus images.
- Dataset sources may include public datasets such as Kaggle or hospital collaborations.
- Data must be anonymized to protect patient identity.

---

### 7. Security & Privacy Requirements
- Patient data must be encrypted during storage and transmission.
- Compliance with Indian data protection guidelines.
- No personal identifiers should be stored unnecessarily.

---

### 8. Ethical & Social Considerations
- The system is intended as a screening tool, not a final diagnostic authority.
- Bias in data must be minimized to ensure fairness across populations.
- Users must be informed that AI predictions require medical validation.

---

### 9. Constraints
- Limited internet connectivity in rural areas.
- Availability of labeled medical datasets.
- Hardware limitations in primary healthcare centers.

---

### 10. Assumptions
- Retinal images are captured using standard fundus cameras.
- Users have basic training to operate the system.
