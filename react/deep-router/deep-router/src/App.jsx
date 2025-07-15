import { 
  useState,
  Suspense,
  lazy 
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navigation from './components/Navigation';
import ProtectRoute from './pages/ProtectRoute';
import Pay from './pages/pay'

const Home = lazy(()=>import ("./pages/Home"))
const About = lazy(()=>import ("./pages/About"))  
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))


function App() {

  return (
    <>
    <Suspense fallback={<div>加载中</div>}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />}/>
          {/* 鉴权 */}
          <Route path="/pay" element={
            <ProtectRoute>
            <Pay />
            </ProtectRoute>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
    </>
  )
}

export default App