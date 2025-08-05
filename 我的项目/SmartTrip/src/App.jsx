import {
  lazy,
  Suspense
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import BlankLayout from '@/components/layout/BlankLayout'
import Loading from '@/components/Loading'
import Protect from '@/components/Protect'
const Suggest = lazy(() => import('@/pages/Suggest'))
const Like = lazy(() => import('@/pages/Like'))
const Home = lazy(() => import('@/pages/Home'))
const Strategy = lazy(() => import('@/pages/Strategy'))
const Smart = lazy(() => import('@/pages/Smart'))
const Account = lazy(() => import('@/pages/Account'))
const Search = lazy(() => import('@/pages/Search'))
const TodoPage = lazy(() => import('@/pages/TodoPage'))
const Article = lazy(() => import('@/pages/Article'))
const Login = lazy(() => import('@/pages/Login'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const SmartService = lazy(() => import('@/pages/SmartService'))
function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Routes>

      <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />} />
          <Route path='strategy' element={<Strategy />}>
            <Route index element={<Suggest />} /> 
            <Route path='like' element={
                <Protect>
                <Like />
                </Protect>
            }/>
            <Route path='suggest' element={<Suggest />} />  
          </Route>
          <Route path='smart' element={
            <Protect>
            <Smart />
            </Protect>
          } />
          <Route path='account' element={
              <Protect>
              <Account />
              </Protect>
          } />
      </Route>

      <Route path='/' element={<BlankLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='search' element={<Search />} />
        <Route path='article/:id' element={<Article />} />
        <Route path='todopage' element={<TodoPage />} />
        <Route path='smartService' element={<SmartService />} />
      </Route>

      <Route path='*' element={<NotFound />} />    

      </Routes>
    </Suspense>
    </>
  )
}

export default App
