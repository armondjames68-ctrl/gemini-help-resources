import { useState, useEffect } from 'react'
import { authAPI } from '../services/api'
import './Profile.css'

function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    try {
      const response = await authAPI.getProfile()
      setUser(response.data)
      setFormData(response.data)
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    try {
      setLoading(true)
      // API call to update profile would go here
      setUser(formData)
      setEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="profile-page"><div className="loading">Loading profile...</div></div>
  }

  if (!user) {
    return <div className="profile-page"><div className="error">Please log in first</div></div>
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h1>My Profile</h1>
          {!editing && <button onClick={() => setEditing(true)} className="btn-edit">Edit Profile</button>}
        </div>

        <div className="profile-card">
          {editing ? (
            <div className="edit-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="form-buttons">
                <button onClick={handleSave} className="btn-save">Save Changes</button>
                <button onClick={() => setEditing(false)} className="btn-cancel">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="profile-info">
              <div className="info-item">
                <label>Name</label>
                <p>{user.name}</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{user.email}</p>
              </div>
              <div className="info-item">
                <label>Category</label>
                <p>{user.category}</p>
              </div>
              <div className="info-item">
                <label>Member Since</label>
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
