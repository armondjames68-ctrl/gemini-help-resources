import { useState, useEffect } from 'react'
import { resourceAPI } from '../services/api'
import './Resources.css'

function Resources() {
  const [resources, setResources] = useState([])
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadResources()
  }, [category, page])

  const loadResources = async () => {
    setLoading(true)
    try {
      let response
      if (category) {
        response = await resourceAPI.getByCategory(category, page)
      } else {
        response = await resourceAPI.getResources(page)
      }
      setResources(response.data.resources || [])

      if (page === 1) {
        const featuredResponse = await resourceAPI.getFeatured()
        setFeatured(featuredResponse.data || [])
      }
    } catch (error) {
      console.error('Error loading resources:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['Education', 'Employment', 'Housing', 'Healthcare', 'Mental Health', 'Legal Aid']

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Resource Directory</h1>
        <p>Find verified resources to support your journey</p>
      </div>

      {featured.length > 0 && (
        <section className="featured-section">
          <h2>Featured Resources</h2>
          <div className="featured-grid">
            {featured.map((resource) => (
              <div key={resource._id} className="resource-card featured">
                <span className="featured-badge">Featured</span>
                <h3>{resource.title}</h3>
                <p className="category-tag">{resource.category}</p>
                <p>{resource.description}</p>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn-learn-more">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="filter-section">
        <h3>Filter by Category</h3>
        <div className="category-buttons">
          <button
            className={`category-btn ${!category ? 'active' : ''}`}
            onClick={() => { setCategory(null); setPage(1); }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${category === cat ? 'active' : ''}`}
              onClick={() => { setCategory(cat); setPage(1); }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {loading ? (
        <div className="loading">Loading resources...</div>
      ) : (
        <section className="resources-list-section">
          <div className="resources-grid">
            {resources.map((resource) => (
              <div key={resource._id} className="resource-card">
                <h3>{resource.title}</h3>
                <p className="category-tag">{resource.category}</p>
                <p>{resource.description}</p>
                <div className="tags">
                  {resource.tags && resource.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn-learn-more">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
          ← Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)}>
          Next →
        </button>
      </div>
    </div>
  )
}

export default Resources
