import {  
  useRef,
  useEffect,
  forwardRef
} from 'react'

import './App.css'

function Guang(props,ref){
  console.log(props,ref)
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

// 用法：
// 1.使用forwardRef(原子组件) ，返回一个全新的组件，给予了ref向下传递的能力
// 2.将原本的子组件Guang替换为全新的父组件WrapperGuang
// 3.原本的子组件添加ref参数，拿到ref
// 3.这样子就可以在父组件中控制子组件中的DOM元素了
// 高阶组件:WrapperGuang
const WrapperGuang = forwardRef(Guang)

function App() {
  // 父组件 想要持有ref  拒绝签收父组件的ref props
  const ref = useRef(null);
  console.log(ref.current);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div className="App">
      {/* <input ref={ref} /> */}
      {/* <Guang ref={ref}/> */}
      <WrapperGuang ref={ref}/>
    </div>
  )
}

export default App