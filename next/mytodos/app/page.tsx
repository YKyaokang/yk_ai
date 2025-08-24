"use client";
import { useEffect, useState } from "react";
import { type Todo } from '@/types/todo'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  }
  
  const addTodo = async () => {
    if (!input.trim()) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({title: input})
    });
    const newTodo = await res.json();
    setTodos([newTodo, ...todos]);
    setInput("")
  }

  const toggleTodo = async (id: number, completed: boolean) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({completed: !completed})
    });
    const updated = await res.json();
    setTodos(todos.map(todo => todo.id === id? updated: todo))
  }

  const deleTodo = async (id: number) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "DELETE"
    });
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Todo List</h1>
        
        <div className="flex gap-3 mb-8">
          <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none transition-all duration-200"
            type="text"
            onKeyPress={e => e.key === 'Enter' && addTodo()}
          />
          <button 
            className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={addTodo}
            disabled={!input.trim()}
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add
            </span>
          </button>
        </div>
        
        {todos.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p>No tasks yet. Add a new task to get started!</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleTodo(todo.id, todo.completed)}
                    className={`h-6 w-6 rounded-full border-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ${
                      todo.completed 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {todo.completed && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span
                    className={`text-lg transition-all duration-200 ${
                      todo.completed 
                        ? 'line-through text-gray-400' 
                        : 'text-gray-800'
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>
                
                <button
                  onClick={() => deleTodo(todo.id)}
                  className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Delete todo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}