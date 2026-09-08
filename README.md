# Gemini Help Resources App

An AI-powered application using Google's Gemini API to provide personalized help resources, guidance, and support for youth and ex-convicts seeking rehabilitation, employment, education, and housing assistance.

## Features

- 🤖 **AI-Powered Chat**: Intelligent conversations using Google Gemini API
- 📚 **Resource Database**: Comprehensive database of help resources (job training, housing, legal aid, mental health)
- 🎯 **Personalized Guidance**: Tailored recommendations based on individual needs
- 📱 **User-Friendly Interface**: Accessible web and mobile interface
- 🔒 **Privacy-Focused**: Secure handling of sensitive user information
- 📍 **Location-Based Resources**: Find help in your area
- 🚨 **Crisis Support**: Quick access to emergency hotlines

## Tech Stack

- **Backend**: Node.js/Express
- **Frontend**: React
- **Database**: MongoDB
- **AI**: Google Gemini API
- **Authentication**: JWT

## Quick Start

### Prerequisites
- Node.js v16+
- MongoDB
- Google Gemini API Key

### Installation

```bash
git clone https://github.com/armondjames68-ctrl/gemini-help-resources.git
cd gemini-help-resources
```

**Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

**Frontend Setup**
```bash
cd ../frontend
npm install
npm start
```

## Environment Variables

Create `.env` in backend directory:

```
GEMINI_API_KEY=your_api_key_here
MONGODB_URI=mongodb://localhost:27017/gemini-help
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

## Resource Categories

- 💼 Employment & Job Training
- 🏠 Housing & Shelter
- 🎓 Education & Skills Development
- 💊 Mental Health & Counseling
- ⚖️ Legal Aid & Re-entry Support
- 🏥 Healthcare & Substance Abuse
- 💰 Financial Assistance
- 👨‍👩‍👧‍👦 Family & Social Services

## License

MIT License

---

**Mission**: Empowering youth and ex-convicts with accessible, personalized resources and support for successful reintegration and personal growth.