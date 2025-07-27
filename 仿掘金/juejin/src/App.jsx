import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout'
import BlankLayout from './components/BlankLayout'

import Home from './pages/Home'
import Synthesis from './pages/Synthesis'
import List from './pages/List'
import Back from './pages/Back'
import Front from './pages/Front'
import Search from './pages/Search'

function App() {

  return (
    <>
     <Routes >
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/synthesis' element={<Synthesis />} />
            <Route path='/list' element={<List />} />
            <Route path='/back' element={<Back />} />
            <Route path='/front' element={<Front />} />
          </Route>

          {/* 空的Layout */}
          <Route path='/' element={<BlankLayout />}>
            <Route path='/search' element={<Search />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
