import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Resources from './pages/Resources'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
