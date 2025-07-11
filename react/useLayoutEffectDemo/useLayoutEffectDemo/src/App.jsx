import { useState,useLayoutEffect,useEffect,useRef } from 'react'
import './App.css'

// function App() {
//   // 响应式对象 
//   const boxRef = useRef();
//   console.log(boxRef.current,boxRef,"//");
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log('useEffect height',boxRef.current.offsetHeight)
//   },[])

//   useLayoutEffect(() => {
//     console.log("useLayout哈哈")
//   })
//   return (
//     <>
//       <div ref={boxRef} style={{height: 100}}></div>
//     </>
//   )
// }

// function App(){
//   const [content1,setContent] = useState("한국의 전통 문화는 오랜 역사 속에서 형성된 독특한 매력을 지니고 있습니다. 특히 한복은 단순한 의복을 넘어 한국인의 미적 감각과 철학이 담긴 예술품으로 평가받습니다. 한복의 선과 색채는 자연과의 조화를 중시하는 한국인의 세계관을 잘 반영하고 있습니다. 또한 한국의 대표적인 전통 음식인 김치는 유네스코 인류무형문화유산으로 등재될 만큼 독보적인 가치를 인정받고 있습니다. 발효 음식이라는 과학적 지혜와 각 가정의 비법이 결합된 살아있는 문화입니다. 전통 공연 예술인 판소리는 한 명의 소리꾼이 고수와의 협연으로 긴 서사시를 풀어나가는 독특한 형식으로, 2003년 유네스코에 등재되었습니다. 이처럼 한국 전통 문화는 현대성을 잃지 않으면서도 정체성을 유지하는 동적 균형의 미학을 보")
//   const ref = useRef();
//   // useEffect(() => {
    
//   // },[])
//   useLayoutEffect(() => {
//     // 阻塞渲染 同步的感觉
//     setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。')
//     ref.current.style.height = '200px';
//   },[])
//   return (
//     <div ref={ref} style={{height: '50px',background: 'lightblue'}}>{content1}</div>

//   )
// }

// 弹窗 
function Modal() {
  const ref = useRef();
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight - height) /2}`
  },[])

  return <div ref={ref} style={{position: 'absolute',height: '200px',background:"red"}}>我是弹窗</div>
}

function App(){
  return (
    <>
    <Modal />
    </>
  )
}

export default App
