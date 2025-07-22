import {
   useState ,
   useEffect,
   useCallback,
   useMemo //缓存一个复杂计算的值
  } from 'react'
import Button from './components/Button'
import './App.css'  

function App() {
  const [count,setCount] = useState(0);
  const [num,setNum] = useState(0)
  console.log('App render')
  // 重新执行但是不运行
  const expensiveComputation = (n) =>{
    console.log("expensiveComputation")
    // 复杂计算 开销高
    for(let i = 0 ; i < 100000 ; i++){
      i++;
    }
    return n*2;
  }
  const result = useMemo(() => expensiveComputation(num),[num]) //useMemo返回一个缓存的值

  useEffect(() => {
    console.log('count',count); 
  },[count])
  useEffect(() => {
    console.log('num',num); 
  },[num])  
  // rerender 重新生成
  // 不要重新生成 和 useEffect []一样 
  // callback 回调函数 缓存
  const handleClick =useCallback(()=>{
    console.log('handleClick')
  },[num])

  return (
    <>
      <div>{result}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}> + </button>
      <br />
      <button onClick={() => setNum(num + 1)}>+</button>
      <br />

      <Button num={num} onClick={handleClick}>Click Me</Button>
    </>
  )
}

export default App
