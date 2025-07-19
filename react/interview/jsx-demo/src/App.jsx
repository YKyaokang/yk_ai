import { useState,createElement } from 'react'
import './App.css'

function App() {
  const [todos,setTodos] = useState([
    {
      id: 1,
      title: '标题一'
    },
    {
      id: 2,
      title: '标题二'
    }
  ])
  
  // JSX语法
  const element = <h1 className='title'>Hello,World</h1>
  
  // createElement语法 - 等效
  const element2 = createElement('h1',{className:'title'},'Hello,World')
  
  // 验证它们是否相等
  console.log('element:', element)
  console.log('element2:', element2)
  
  return (
    <>
      <div>
        <h3>JSX语法创建的元素：</h3>
        {element}
      </div>
      
      <div>
        <h3>createElement创建的元素：</h3>
        {element2}
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}> {todo.title}</li>
        ))
        }
      </ul>
    </>
  )
}

export default App
