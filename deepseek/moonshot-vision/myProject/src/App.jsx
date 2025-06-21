import { useState } from 'react'
import './App.css'

function App() {
  
  console.log(import.meta.env.VITE_API_KEY);
  const [content,setContent] = useState('')
  // react 内置的 hook（钩子） 函数 快速的解决一些问题 响应式的数据状态
  // useRef 可以绑定 DOM 等对象的绑定 
  const updateBase64Data = (e) => {

  }
  const update = () => {
    
  }
  return (
    <div className='container'>
      <label htmlFor="fileInput">文件：</label> 
      <input type="file" 
      id='fileInput'
      className='input'
      accept='.jpeg,.jpg,.png,.gif'
      onChange={updateBase64Data}
      />
      <button onClick={update}>提交</button>
      <div className='output'>
        <div className="preview">

        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  )
}

export default App