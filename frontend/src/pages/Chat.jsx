import { useState, useEffect } from 'react'
import { chatAPI, resourceAPI } from '../services/api'
import './Chat.css'

function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [conversationId, setConversationId] = useState(null)
  const [resources, setResources] = useState([])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await chatAPI.sendMessage(input, conversationId)
      setConversationId(response.data.conversationId)
      
      const assistantMessage = { role: 'assistant', content: response.data.message }
      setMessages(prev => [...prev, assistantMessage])
      setResources(response.data.resources || [])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat with FTY Assistant</h1>
        <p>Get personalized guidance and resources</p>
      </div>

      <div className="chat-content">
        <div className="messages-section">
          <div className="messages">
            {messages.length === 0 && (
              <div className="welcome-message">
                <h2>Welcome to FTY Chat</h2>
                <p>Ask me anything about education, employment, housing, or other resources.</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`message message-${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}
            {loading && <div className="message message-assistant"><div className="typing">Typing...</div></div>}
          </div>
        </div>

        {resources.length > 0 && (
          <div className="resources-section">
            <h3>Suggested Resources</h3>
            <div className="resources-list">
              {resources.map((resource, idx) => (
                <div key={idx} className="resource-item">
                  <h4>{resource.title}</h4>
                  <p className="category">{resource.category}</p>
                  <p>{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Send</button>
      </form>
    </div>
  )
}

export default Chat
