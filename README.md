# FTY (FOR THE YOUTH)
**501(c)(3) Nonprofit Organization**

An AI-powered application using Google's Gemini API to provide personalized help resources, guidance, and support for youth and ex-convicts seeking rehabilitation, employment, education, and housing assistance.

## About FTY

FTY is a 501(c)(3) tax-exempt nonprofit organization dedicated to empowering disadvantaged youth and formerly incarcerated individuals through accessible technology and community resources. Our mission is to break cycles of poverty and incarceration by providing personalized guidance, educational support, and employment opportunities.

## Features

- 🤖 **AI-Powered Chat**: Intelligent conversations using Google Gemini API
- 📚 **Resource Database**: Comprehensive database of help resources (job training, housing, legal aid, mental health)
- 🎯 **Personalized Guidance**: Tailored recommendations based on individual needs
- 📱 **User-Friendly Interface**: Accessible web and mobile interface
- 🔒 **Privacy-Focused**: Secure handling of sensitive user information
- 📍 **Location-Based Resources**: Find help in your area
- 🚨 **Crisis Support**: Quick access to emergency hotlines
- 💼 **Career Pathways**: Job training and employment opportunities
- 🏠 **Housing Assistance**: Shelter and accommodation resources
- 📖 **Educational Programs**: Scholarships and skill development

## Tech Stack

- **Backend**: Node.js/Express
- **Frontend**: React + Vite
- **Database**: MongoDB
- **AI**: Google Gemini API
- **Authentication**: JWT
- **Styling**: Tailwind CSS
- **State Management**: Zustand/React Query

## Quick Start

### Prerequisites
- Node.js v16+
- MongoDB
- Google Gemini API Key

### Installation

```bash
git clone https://github.com/armondjames68-ctrl/fty-for-the-youth.git
cd fty-for-the-youth
```

**Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your Gemini API key and MongoDB connection
npm run dev
```

**Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`
Frontend runs on `http://localhost:3000`

## Environment Variables

Create `.env` in backend directory:

```
GEMINI_API_KEY=your_api_key_here
MONGODB_URI=mongodb://localhost:27017/fty
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## Resource Categories

- 💼 Employment & Job Training
- 🏠 Housing & Shelter
- 🎓 Education & Skills Development
- 💊 Mental Health & Counseling
- ⚖️ Legal Aid & Re-entry Support
- 🏥 Healthcare & Substance Abuse Treatment
- 💰 Financial Assistance & Grants
- 👨‍👩‍👧‍👦 Family & Social Services
- 🎨 Recreation & Community Programs
- 📚 Tutoring & Academic Support

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get current user profile

### Chat
- `POST /api/chat/message` - Send message and get AI response
- `GET /api/chat/history/:userId` - Get conversation history
- `DELETE /api/chat/:conversationId` - Delete conversation

### Resources
- `GET /api/resources` - Get all resources
- `GET /api/resources/category/:category` - Get resources by category
- `POST /api/resources/search` - Search resources
- `GET /api/resources/location` - Get resources by location (geospatial)
- `GET /api/resources/featured` - Get featured resources

### Users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile
- `GET /api/users/:userId/preferences` - Get user preferences
- `PUT /api/users/:userId/preferences` - Update preferences

## Project Structure

```
fty-for-the-youth/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   ├── authRoutes.js
│   │   │   │   ├── chatRoutes.js
│   │   │   │   ├── resourceRoutes.js
│   │   │   │   └── userRoutes.js
│   │   │   ├── controllers/
│   │   │   │   ├── authController.js
│   │   │   │   ├── chatController.js
│   │   │   │   └── resourceController.js
│   │   │   └── validators/
│   │   ├── services/
│   │   │   ├── geminiService.js
│   │   │   ├── resourceService.js
│   │   │   └── authService.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Resource.js
│   │   │   └── Conversation.js
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── logger.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat/
│   │   │   ├── Resources/
│   │   │   ├── Auth/
│   │   │   └── Common/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── docs/
│   ├── API.md
│   ├── SETUP.md
│   └── ARCHITECTURE.md
└── README.md
```

## Core Features

### 1. AI Chat Assistant
- Powered by Google Gemini API
- Contextual understanding of user needs
- Multi-turn conversations
- Automatic resource recommendation
- Crisis detection and response

### 2. Resource Management
- Comprehensive resource database
- Location-based search
- Category filtering
- Verified resources
- User ratings and reviews

### 3. User Profiles
- Customizable preferences
- Saved resources
- Conversation history
- Progress tracking

### 4. Safety Features
- Crisis intervention detection
- Emergency hotline integration
- Privacy protection
- Data encryption

## Nonprofit Impact

As a 501(c)(3) nonprofit organization, FTY is committed to:
- **Accessibility**: Free or low-cost services for all users
- **Equity**: Reducing barriers to opportunity for underserved communities
- **Transparency**: Open communication about our mission and impact
- **Accountability**: Using donations responsibly to maximize community benefit
- **Advocacy**: Promoting systemic changes that support youth and formerly incarcerated individuals

### Tax-Exempt Status
FTY is recognized by the IRS as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible. For more information, visit [our nonprofit page].

## Contributing

We welcome contributions! There are many ways to help:

1. **Code Contributions**: Fork the repository and submit pull requests
2. **Donations**: Support our mission with a tax-deductible donation
3. **Volunteer**: Help us expand our reach and impact
4. **Share Resources**: Recommend verified resources in your community
5. **Feedback**: Help us improve by sharing user feedback

### Developer Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security & Privacy

- End-to-end encrypted conversations
- GDPR compliant data handling
- Anonymized resource recommendations
- Secure API authentication with JWT
- Regular security audits
- No data sharing with third parties
- Commitment to protecting vulnerable users

## License

MIT License - See LICENSE file for details

This open-source software enables other nonprofits and organizations to build similar tools for their communities.

## Support

For questions or support:
- Open an issue on GitHub
- Email: support@ftyapp.com
- Donate: [Our nonprofit donation page]
- Volunteer: [Volunteer opportunities]
- Documentation: See `/docs` folder

## Contact

**FTY (FOR THE YOUTH)**
501(c)(3) Nonprofit Organization

- Website: [www.ftyapp.com]
- Email: info@ftyapp.com
- Support: support@ftyapp.com
- Address: [To be added]

## Resources

- [Google Gemini API](https://ai.google.dev/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [IRS 501(c)(3) Information](https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations)

## Acknowledgments

FTY is made possible by:
- Our dedicated development team
- Community partners and resource providers
- Volunteers and supporters
- Google for providing Gemini API access
- All organizations working toward youth empowerment and criminal justice reform

---

**FTY Mission**: Empowering youth and formerly incarcerated individuals with accessible, personalized resources and support for successful reintegration, education, and personal growth.

**Vision**: A world where every young person and formerly incarcerated individual has equal access to opportunity, education, employment, and support services.

*A 501(c)(3) nonprofit leveraging technology for social impact*
