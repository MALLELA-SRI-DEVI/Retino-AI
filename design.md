# Design Document: AI-Based Diabetic Retinopathy Screening System

## System Overview

An AI-powered web application for early detection of diabetic retinopathy in Indian healthcare settings, particularly rural and resource-limited areas. The system analyzes retinal fundus images using a Swin Transformer model to classify disease severity into five levels: No DR, Mild DR, Moderate DR, Severe DR, and Proliferative DR.

**Key Features:**
- Automated AI screening with 85%+ accuracy
- Bilingual interface (English/Hindi)
- Offline mode for limited connectivity areas
- Patient record management
- Automated report generation with referral recommendations

## Architecture

### System Components

```
Frontend (React.js)
    ↓ REST API
Backend (Python/FastAPI)
    ↓
AI Model (Swin Transformer) + Database (PostgreSQL)
```

**Frontend**: Web interface for image upload, results display, and patient management

**Backend**: API services for authentication, image processing, AI classification, and reporting

**AI Model**: Swin Transformer for image classification (224x224 input, 5-class output)

**Database**: Patient records, screening history, and audit logs

## Data Flow

```
1. Upload retinal image
   ↓
2. Validate image (format, size, quality)
   ↓
3. Preprocess (resize to 224x224, normalize, enhance contrast)
   ↓
4. AI classification (Swin Transformer inference)
   ↓
5. Generate results (severity level + confidence score)
   ↓
6. Display results with recommendations
   ↓
7. Save to patient record + Generate PDF report
```

## AI Model

**Model Choice**: Swin Transformer (Swin-T)
- Superior performance on medical imaging vs traditional CNNs
- Better at capturing fine-grained retinal details
- Pretrained on ImageNet, fine-tuned on DR datasets

**Training Data**:
- Kaggle Diabetic Retinopathy Detection
- APTOS 2019 Blindness Detection
- EyePACS dataset

**Performance Targets**:
- Accuracy: ≥85%
- Sensitivity for referable DR: ≥90%
- Inference time: <5 seconds on CPU

**Explainability**:
- Attention maps showing which retinal regions influenced classification
- Confidence scores for transparency
- Feature highlighting (hemorrhages, exudates)

## Deployment Strategy

### Cloud Deployment (Urban Facilities)
- Hosted on AWS/Azure/Google Cloud
- Centralized database across facilities
- Auto-scaling for high demand
- Real-time analytics

### On-Premises Deployment (Rural Facilities)
- Runs on standard computers (4GB RAM, no GPU)
- Local database (SQLite)
- Cached model weights
- Works without internet

### Offline Mode
- Local storage for patient records and images
- Background sync when connectivity available
- Suitable for mobile screening camps

## Security and Privacy

**Data Protection**:
- AES-256 encryption for patient data
- TLS 1.2+ for API communications
- EXIF metadata removal from images
- Compliance with Indian data protection guidelines

**Access Control**:
- JWT-based authentication
- Role-based access (Patient, Healthcare Worker, Admin)
- Session timeout after 15 minutes
- Audit logging for all patient record access

## Testing Strategy

**Unit Tests**: Specific examples, edge cases, error handling (85% coverage target)

**Property-Based Tests**: Universal properties across all inputs (100+ iterations per test)

**Model Validation**: 5-fold cross-validation, separate test set, confusion matrix analysis

## Limitations

1. **Screening tool only** - requires ophthalmologist confirmation for diagnosis
2. **Single image analysis** - doesn't analyze multiple views or track progression
3. **Image quality dependent** - performance degrades with poor quality images
4. **Limited language support** - currently only English and Hindi
5. **Potential bias** - model performance may vary if training data lacks diversity

## Future Enhancements

**Short-term**:
- Multi-language support (regional Indian languages)
- Mobile app for field use
- Batch image processing

**Long-term**:
- Telemedicine integration for remote consultations
- Longitudinal tracking of disease progression
- Multi-disease detection (glaucoma, AMD)
- Federated learning across facilities
- Population health analytics at district/state level

## Conclusion

This system makes diabetic retinopathy screening accessible in resource-limited Indian healthcare settings through AI automation, offline capability, and user-friendly design. With 85%+ accuracy and explainable results, it enables early detection and timely referrals, helping reduce preventable vision loss across India.
