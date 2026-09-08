import { Link } from 'react-router-dom'
import { FaRobot, FaBook, FaMapLocationDot, FaHeartPulse } from 'react-icons/fa6'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>FTY - For The Youth</h1>
          <p className="subtitle-org">501(c)(3) Nonprofit Organization</p>
          <p className="subtitle">Empowering youth and ex-convicts with personalized resources and AI-powered guidance</p>
          <div className="cta-buttons">
            <Link to="/chat" className="btn btn-primary">Start Chatting Now</Link>
            <Link to="/resources" className="btn btn-secondary">Explore Resources</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaRobot className="feature-icon" />
            <h3>AI Chat Assistant</h3>
            <p>Get personalized guidance from our intelligent AI powered by Google Gemini</p>
          </div>
          <div className="feature-card">
            <FaBook className="feature-icon" />
            <h3>Resource Directory</h3>
            <p>Access verified resources for employment, housing, education, and more</p>
          </div>
          <div className="feature-card">
            <FaMapLocationDot className="feature-icon" />
            <h3>Location-Based Search</h3>
            <p>Find resources near you with our geospatial search capabilities</p>
          </div>
          <div className="feature-card">
            <FaHeartPulse className="feature-icon" />
            <h3>Crisis Support</h3>
            <p>24/7 access to crisis hotlines and emergency mental health resources</p>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To provide free, accessible resources and AI-powered guidance to help young people and formerly incarcerated individuals build better futures through education, employment, housing, and mental health support.</p>
      </section>
    </div>
  )
}

export default Home
