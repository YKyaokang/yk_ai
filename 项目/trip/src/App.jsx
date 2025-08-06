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
import Loading from '@/components/Loading'
import Toast from '@/components/Toast'

const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Discount = lazy(() => import('@/pages/Discount'))
const Collection = lazy(() => import('@/pages/Collection'))
const Trip = lazy(() => import('@/pages/Trip'))
const Account = lazy(() => import('@/pages/Account'))
const Login = lazy(() => import('@/pages/Login'))
const Detail = lazy(() => import('@/pages/Detail'))
const Coze = lazy(() => import('@/pages/Coze'))
const Article = lazy(() => import('@/pages/Article'))
const ArticleNew = lazy(() => import('@/pages/Article/ArticleNew'))

import './App.css'

function App() {


  return (
    <>
      <Suspense fallback={<Loading/>}>
      
        <Routes >
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/trip' element={<Trip />} />
            <Route path='/account' element={<Account />} />
          </Route>

          <Route path='/' element={<BlankLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<Search />} />
            <Route path='/article' element={<Article />}>
              <Route path='new' element={<ArticleNew/>} />
            </Route>
            <Route path='/detail/:id' element={<Detail/> }/>
          </Route>
          <Route path="/coze" element={<Coze />}/>
        </Routes>
      </Suspense>
      <Toast />
    </>
  )
}

export default App
