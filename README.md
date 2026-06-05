# ClaimPilot AI

AI-powered OPD Claim Adjudication Platform built for the Plum AI Automation Engineer Intern Assignment.

ClaimPilot AI automates the health insurance OPD claim review process by extracting information from medical documents, validating claims against insurance policy rules, and generating explainable approval, rejection, or partial approval decisions.

---

## Live Demo

### Frontend

https://claim-pilot-ai.vercel.app/

### Backend API

https://claimpilot-ai-04z9.onrender.com/


---

## Problem Statement

Insurance claim adjudication is traditionally a manual, time-consuming process that requires reviewing medical documents, validating policy conditions, and making reimbursement decisions.

The goal of this project is to automate the OPD claim review workflow using AI-powered document understanding and rule-based policy validation.

ClaimPilot AI demonstrates how Large Language Models (LLMs) can be integrated with traditional business rules to build an intelligent claim processing pipeline.

---

## Key Features

### AI-Powered Information Extraction

Extracts structured claim information from:

- Medical Bills
- Prescriptions
- OPD Claim Documents
- PDF Reports
- Scanned Images

Powered by Google Gemini.

### Automated Claim Adjudication

Evaluates extracted claim information against policy rules and generates:

- APPROVED
- REJECTED
- PARTIAL APPROVAL

decisions automatically.

### Explainable Decisions

Returns:

- Decision Type
- Approved Amount
- Rejection Reasons
- Confidence Score

to provide transparency in claim processing.

### Database Persistence

Stores processed claims in PostgreSQL (Supabase) for auditability and future retrieval.

### Modern User Interface

Provides:

- Drag-and-Drop Upload
- Real-Time Processing Status
- Decision Dashboard
- Extracted Claim Details
- Approval/Rejection Summary

---

## System Architecture

```text
┌──────────────────────┐
│   React Frontend     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Express Backend     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Multer File Upload   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ PDF/Image Processing │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Gemini AI Engine   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Rule Engine Layer   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ PostgreSQL Database  │
│     (Supabase)       │
└──────────────────────┘
```

---

## End-to-End Workflow

```text
Upload Claim Documents
          │
          ▼
Extract Text from PDF/Image
          │
          ▼
Gemini AI Extraction
          │
          ▼
Generate Structured JSON
          │
          ▼
Rule-Based Validation
          │
          ▼
Decision Generation
(APPROVED / REJECTED / PARTIAL)
          │
          ▼
Store Claim in Database
          │
          ▼
Display Results Dashboard
```

---

## Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- Node.js
- Express.js
- Multer

### AI Layer

- Google Gemini API

### Document Processing

- pdf-parse

### Database

- PostgreSQL
- Supabase

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## Extracted Claim Fields

```json
{
  "doctorReg": "",
  "doctorName": "",
  "patientName": "",
  "diagnosis": "",
  "claimAmount": 0,
  "hospital": "",
  "treatmentDate": "",
  "serviceType": "",
  "prescriptionPresent": false,
  "billPresent": false,
  "isLegible": true,
  "preAuthPresent": false,
  "medicallyNecessary": true,
  "cosmeticProcedure": false,
  "experimentalTreatment": false
}
```

---

## Decision Output Format

```json
{
  "claim_id": "CLM_12345",
  "decision": "APPROVED",
  "approved_amount": 2500,
  "rejection_reasons": [],
  "confidence_score": 0.95,
  "notes": "Claim meets policy requirements.",
  "next_steps": "Proceed to reimbursement."
}
```

---

## Implemented Validation Rules

### Document Validation

- MISSING_DOCUMENTS
- ILLEGIBLE_DOCUMENTS

### Medical Validation

- DOCTOR_REG_INVALID
- NOT_MEDICALLY_NECESSARY

### Financial Validation

- BELOW_MIN_AMOUNT
- PER_CLAIM_EXCEEDED
- PARTIAL_APPROVAL

### Coverage Validation

- SERVICE_NOT_COVERED
- COSMETIC_PROCEDURE
- EXPERIMENTAL_TREATMENT
- PRE_AUTH_MISSING

---

## Database Schema

### claims

| Column | Type |
|---------|---------|
| claim_id | VARCHAR |
| patient_name | TEXT |
| doctor_name | TEXT |
| diagnosis | TEXT |
| claim_amount | NUMERIC |
| decision | TEXT |
| approved_amount | NUMERIC |
| created_at | TIMESTAMP |

---

## API Documentation

### Analyze Claim

```http
POST /api/claims/analyze
```

### Request

```form-data
documents: claim.pdf
```

### Response

```json
{
  "decision": "APPROVED",
  "approvedAmount": 2500,
  "confidence_score": 0.95
}
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ClaimPilot-AI.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Backend `.env`

```env
DATABASE_URL=
GEMINI_API_KEY=
JWT_SECRET=
```

---

## Screenshots

### Home Page

![Home](docs/homepage.png)

### Upload Interface

![Upload](docs/upload.png)

### Processing Workflow

![Processing](docs/processing.png)

### Approved Claim

![Approved](docs/approved.png)

### Database Records

![Database](docs/database.png)

---

## Future Enhancements

- Fraud Detection Engine
- Dynamic Policy Configuration
- Multi-Language Document Support
- Claim History Dashboard
- Human-in-the-Loop Review Workflow
- Analytics and Reporting

---

## Assignment Highlights

- End-to-End AI Claim Processing
- Real-Time Document Analysis
- LLM-Based Information Extraction
- Rule-Based Adjudication Engine
- Database Persistence
- Full Stack Deployment
- CI/CD via GitHub + Render + Vercel

---

## Author

Developed by **Ragamaie Nagineni** as part of the Plum AI Automation Engineer Intern Assignment.
