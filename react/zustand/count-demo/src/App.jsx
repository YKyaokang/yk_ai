import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import RepoList from './components/RepoList'
import { useCounterStore } from './store/count'

function App() {
  const {count} = useCounterStore()
  return (
    <>
    App中的: {count}
     <Counter />
     <TodoList />
     <RepoList />
    </>
  )
}

export default App
