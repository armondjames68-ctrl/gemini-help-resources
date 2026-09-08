import { Link } from 'react-router-dom'
import { FaHome, FaComments, FaBook, FaUser, FaSignInAlt } from 'react-icons/fa'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🎯</span>
          FTY
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <FaHome /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chat" className="nav-link">
              <FaComments /> Chat
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link">
              <FaBook /> Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <FaUser /> Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <FaSignInAlt /> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
