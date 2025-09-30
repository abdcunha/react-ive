import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [health, sethHealth] = useState<{status?: string, }>({})
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
      
    </>
  )
}

export default App
