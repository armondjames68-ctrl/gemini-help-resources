# Gemini Help Resources API Documentation

## Authentication

All API requests require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Key Endpoints

### Chat
- `POST /api/chat/message` - Send a message and get AI response
- `GET /api/chat/history/:userId` - Get conversation history

### Resources
- `GET /api/resources` - Get all resources
- `POST /api/resources/search` - Search resources

### Users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

## Resource Categories

- employment
- housing
- education
- mental-health
- legal-aid
- healthcare
- financial
- social-services
