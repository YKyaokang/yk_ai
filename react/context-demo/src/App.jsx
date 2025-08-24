import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(count);
    },10000)
  },[])

  return (
    <>
      <button onClick={(prev) => setCount(prev + 1)}>在十秒内点击这个按钮两下，控制台在10秒后打印count的值</button>
    </>
  )
}

export default App