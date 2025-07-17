import { 
  useState,
  useEffect,
  Suspense,
  lazy
} from 'react'

import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
const RepoList = lazy(() => import('./pages/RepoList'))

import Loading from './components/Loading'


function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/users/:id/repos" element={<RepoList />}/>
        <Route path='*' element={<Navigate to="users/shunwuyu/repos"/>}/>
      </Routes>
    </Suspense>
  )
}

export default App