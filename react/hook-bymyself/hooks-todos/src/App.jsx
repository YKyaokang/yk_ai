import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 开发的任务单位就是组件 */}
      {/* <div className="app"> </div> */}
      <Todos />
    </>
  )
}

export default App
