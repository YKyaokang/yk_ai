import { useEffect } from 'react'
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

const Home = lazy(() => import('@/pages/Home'))
const Strategy = lazy(() => import('@/pages/Strategy'))
const Smart = lazy(() => import('@/pages/Smart'))
const Account = lazy(() => import('@/pages/Account'))
const Search = lazy(() => import('@/pages/Search'))
const TodoPage = lazy(() => import('@/pages/TodoPage'))
import { useRecommandStore } from '@/store/useRecommandStore'
function App() {
  const { fetchRecommands,recommands } = useRecommandStore()

  useEffect(() => {
    fetchRecommands()
    console.log(recommands)
  }, [])
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/' element={<MainLayout />}>
          <Route path='home' element={<Home />} />
          <Route path='strategy' element={<Strategy />} />
          <Route path='smart' element={<Smart />} />
          <Route path='account' element={<Account />} />
          
        </Route>
        <Route path='/' element={<BlankLayout />}>
        <Route path='search' element={<Search />} />
        <Route path='todopage' element={<TodoPage />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  )
}

export default App
