import { useState,useRef } from 'react'
import './App.css'

function ControlledInput({onSubmit}) {
  const [value, setValue] = useState('') // 响应式状态
  const [error,setError] = useState('') 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value, '//////');
    onSubmit(value)
  }
  const handleChange =(e) =>{
    e.preventDefault();
    setValue(e.target.value);
    if(e.target.value.length < 6) {
      setError('输入内容不能小于6个字符')
    } else {
      setError('')
    }
    //频繁触发 实时判断表单是否合格 
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="controlled-input">受控组件</label>
      <input 
        type="text" 
        value={value}
        onChange={handleChange}
        required
      />
      {error && (<p>error</p>)}
      <input type="submit" value="提交" />
    </form>
  )
}

function UncontrollerInput() {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const value = inputRef.current.value
    console.log(value,'????')
  }
  const inputRef = useRef(null);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uncontrolled-input"></label>
      <input type="text" 
      id='uncontrolled-input'
      ref={inputRef}/>
      <input type="submit" value="提交" />
    </form>
  )
}

function App() {
  const handleSubmit = (value) => {
    console.log(value, '??????????')
  }

  return (
    <>
      <ControlledInput onSubmit={handleSubmit}/>
      <UncontrollerInput onSubmit={handleSubmit}/>
    </>
  )
}

export default App