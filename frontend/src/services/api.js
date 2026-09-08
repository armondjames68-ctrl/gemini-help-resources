import axios from 'axios'

const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/profile'),
}

export const chatAPI = {
  sendMessage: (message, conversationId) => 
    api.post('/chat/message', { message, conversationId }),
  getHistory: (userId) => api.get(`/chat/history/${userId}`),
  deleteConversation: (conversationId) => 
    api.delete(`/chat/${conversationId}`),
}

export const resourceAPI = {
  getResources: (page = 1, limit = 10) => 
    api.get('/resources', { params: { page, limit } }),
  getByCategory: (category, page = 1) => 
    api.get(`/resources/category/${category}`, { params: { page } }),
  searchByLocation: (longitude, latitude, distance) => 
    api.get('/resources/location/search', { params: { longitude, latitude, distance } }),
  getFeatured: () => api.get('/resources/featured'),
  getById: (id) => api.get(`/resources/${id}`),
}

export default api
