import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [title,setTitle] = useState("");
  const [color,setColor] = useState("");
  const handleClick = () =>{
    // 异步 不是同步
    // react  性能优化，合并多次更新 统一处理
    // 重绘重排 
    // 数据绑定，界面更新 
    // JS 引擎 V8 ，高速过路费 渲染引擎 Blink
    
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <>
     <p>当前记数：{count}</p>
     <button onClick={handleClick}></button>
    </>
  )
}

export default App
