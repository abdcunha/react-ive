import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [health, sethHealth] = useState<{ status?: string, message?: string }>({})
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:3000/health')
        const data = await response.json()
        sethHealth(data);
        setError('')
      } catch (err) {
        setError('Failed to connect to backend')
        console.error('Health check failed:', err)
      }
    }

    checkHealth()
  }, []);

  return (
    <>
      {/* Health Status Display */}
      <div className="card">
        <h2>Backend Health Status</h2>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <div>
            <p>Status: {health.status || "Loading..."}</p>
            <p>Message: {health.message || "Loading..."}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
