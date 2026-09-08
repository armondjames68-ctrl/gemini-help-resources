# Setup Guide

## Prerequisites

- Node.js v16+
- MongoDB
- Google Gemini API Key

## Installation

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your API keys and configuration
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Getting API Keys

### Google Gemini API
- Go to https://ai.google.dev/
- Create API key
- Add to .env as GEMINI_API_KEY

### MongoDB
- Local: Install MongoDB and run `mongod`
- Cloud: Use MongoDB Atlas at https://www.mongodb.com/cloud/atlas

## Troubleshooting

- **MongoDB Connection Error**: Ensure MongoDB is running
- **Port in Use**: Change PORT in .env
- **API Key Error**: Verify key is valid and correctly copied
