import { useState, useEffect } from 'react'
import { getRepos } from '@/api/repos'

function App() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await getRepos()
        setRepos(res.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="repo-container">
      <h1>项目仓库</h1>
      <ul className="repo-list">
        {repos.map(repo => (
          <li key={repo.id} className="repo-item">
            <h3>{repo.title}</h3>
            <p>{repo.description}</p>
            <div>⭐ {repo.stars}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App