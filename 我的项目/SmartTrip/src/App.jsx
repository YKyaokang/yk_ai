import {useEffect} from 'react'
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
const Suggest = lazy(() => import('@/pages/Suggest'))
const Like = lazy(() => import('@/pages/Like'))
const Home = lazy(() => import('@/pages/Home'))
const Strategy = lazy(() => import('@/pages/Strategy'))
const Smart = lazy(() => import('@/pages/Smart'))
const Account = lazy(() => import('@/pages/Account'))
const Search = lazy(() => import('@/pages/Search'))
const TodoPage = lazy(() => import('@/pages/TodoPage'))
const Article = lazy(() => import('@/pages/Article'))
function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Routes>
      <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />} />
          <Route path='strategy' element={<Strategy />}>
            <Route index element={<Suggest />} />  {/*默认显示推荐内容*/}
            <Route path='like' element={<Like />}/>  {/*关注内容*/}
            <Route path='suggest' element={<Suggest />} />  {/*推荐内容 */}
          </Route>
          <Route path='smart' element={<Smart />} />
          <Route path='account' element={<Account />} />    
      </Route>

        <Route path='/' element={<BlankLayout />}>
        <Route path='search' element={<Search />} />
        <Route path='article/:id' element={<Article />} />
        <Route path='todopage' element={<TodoPage />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  )
}

export default App
