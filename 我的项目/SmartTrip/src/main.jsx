import { createRoot } from 'react-dom/client'
import 'lib-flexible' //适配移动端
import './index.css'
import App from './App.jsx'
import {
    BrowserRouter as  Router
  } from 'react-router-dom'

// 在生产环境中启动mock服务
if (import.meta.env.PROD) {
  console.log('🔍 检测到生产环境，正在加载Mock服务...')
  import('../mock/mockProdServer.js').then(({ setupProdMockServer }) => {
    setupProdMockServer()
    console.log('🚀 生产环境Mock服务已启动')
  }).catch(error => {
    console.error('❌ 生产环境Mock服务启动失败:', error)
  })
} else {
  console.log('🔧 开发环境使用vite-plugin-mock')
}

createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
)
