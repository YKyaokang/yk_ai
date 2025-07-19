import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '标题一'
    },
    {
      id: 2,
      title: '标题二'
    },
    {
      id: 3,
      title: '标题三'
    },
  ])
  useEffect(() => {
    setTimeout(() => {
      setTodos([
        {
          id: 4,
          title: '哈哈'
        },
        ...todos
      ])
    },3000)
  },[])
  return (
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default App