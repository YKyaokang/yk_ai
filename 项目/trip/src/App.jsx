import {
  lazy,
  Suspense
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'

const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Discount = lazy(() => import('@/pages/Discount'))
const Collection = lazy(() => import('@/pages/Collection'))
const Trip = lazy(() => import('@/pages/Trip'))
const Account = lazy(() => import('@/pages/Account'))
const Login = lazy(() => import('@/pages/Login'))

import './App.css'

function App() {

  // async function testChat() {
  //   const res = await chat([
  //     { role: "user", content: "请问如何实现jwt" }
  //   ]);
  //   console.log(res, "//**/");
  // }
  // testChat();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* 带有tabbar的Layout */}
        <Routes >
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/trip' element={<Trip />} />
            <Route path='/account' element={<Account />} />
          </Route>

          {/* 空的Layout */}

          <Route path='/' element={<BlankLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
