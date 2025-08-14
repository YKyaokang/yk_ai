import './App.css'
import LifeCycleDemo from './components/LifeCycleDemo'
import {
  useToggle,
  useRequest //比用的请求的hooks
} from 'ahooks'

function getUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('高傲的卢')
    }, 5000)
  })
}
const { data, loading, run } = useRequest(getUsername);
function App() {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  return (
    <>
      <LifeCycleDemo />
      <button onClick={run}>获取用户名</button>
      <div>{data}</div>
      <div>{loading ? '加载中...' : '加载完成'}</div>
    </>
  )
}

export default App
