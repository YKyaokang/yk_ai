import { useState,useLayoutEffect,useEffect,useRef } from 'react'
import './App.css'

function App() {
  // 响应式对象 
  const boxRef = useRef();
  console.log(boxRef.current,boxRef,"//");
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect height',boxRef.current.offsetHeight)
  },[])

  useLayoutEffect(() => {
    console.log("useLayout哈哈")
  })
  return (
    <>
      <div ref={boxRef} style={{height: 100}}></div>
    </>
  )
}

function App(){
  const [content1,setContent] = useState(" 적인 가치를결합된 살아있풀되었 않으면서도 정 미학을 보")
  const ref = useRef();
  // useEffect(() => {
    
  // },[])
  useLayoutEffect(() => {
    // 阻塞渲染 同步的感觉
    setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。')
    ref.current.style.height = '200px';
  },[])
  return (
    <div ref={ref} style={{height: '50px',background: 'lightblue'}}>{content1}</div>

  )
}

// 弹窗 
// function Modal() {
//   const ref = useRef();
//   useLayoutEffect(() => {
//     const height = ref.current.offsetHeight;
//     ref.current.style.marginTop = `${(window.innerHeight - height) /2}`
//   },[])

//   return <div ref={ref} style={{position: 'absolute',height: '200px',background:"red"}}>我是弹窗</div>
// }

// function App(){
//   return (
//     <>
//     <Modal />
//     </>
//   )
// }

export default App

function App(){
  const [content,setContent] = useState("11111111111111111111111111111111111111")
  //使用useEffect时：
  useEffect(() => {
    setContent('2222222222222222222222222222222222')
  },[])
  //使用useLayoutEffect时：
  useLayoutEffect(() => {
    setContent('2222222222222222222222222222222222')
  },[])
  return (
    <div>{content}</div>

  )
}