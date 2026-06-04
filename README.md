# ClaimPilot AI

AI-powered OPD Claim Adjudication Platform built for the Plum AI Automation Engineer Intern Assignment.

ClaimPilot AI automates the OPD insurance claim review process by extracting information from medical documents, validating claims against policy rules, and generating explainable approval, rejection, or partial approval decisions.

## Features

- 📄 Upload and process medical bills, prescriptions, and claim documents
- 🤖 AI-powered information extraction using Google Gemini
- 📋 Rule-based claim adjudication engine
- ✅ Automated approval, rejection, and partial approval decisions
- 🗄️ PostgreSQL (Supabase) claim storage and audit trail
- 📊 Interactive dashboard for claim analysis and results

## Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- Node.js
- Express.js
- Multer

### AI & Document Processing
- Google Gemini API
- pdf-parse

### Database
- PostgreSQL
- Supabase

## Workflow

```text
Upload Document
      ↓
PDF/Image Processing
      ↓
Gemini AI Extraction
      ↓
Rule Engine Validation
      ↓
Claim Decision
(APPROVED / REJECTED / PARTIAL)
      ↓
PostgreSQL Storage
      ↓
Result Dashboard
```

## Supported Claim Decisions

- APPROVED
- REJECTED
- PARTIAL

## Implemented Validation Rules

- MISSING_DOCUMENTS
- ILLEGIBLE_DOCUMENTS
- DOCTOR_REG_INVALID
- BELOW_MIN_AMOUNT
- PER_CLAIM_EXCEEDED
- Basic Coverage Validation
- Partial Approval Handling

## Screenshots



## Future Enhancements

- Manual Review Workflow
- Advanced Fraud Detection
- Dynamic Policy Configuration
- Multi-language Document Support
- Claim History Dashboard

## Author

Developed as part of the Plum AI Automation Engineer Intern Assignment.
