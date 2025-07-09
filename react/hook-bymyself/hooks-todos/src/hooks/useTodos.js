import {
    useState,
    useEffect
} from 'react';

export const useTodos = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")))

    useEffect(() => {
        // 接收字符串
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const addTodo =  (text) => {
        // setTodo
        // 数据状态是对象的时候
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                isComplete: false
            }
        ])
    }

    const onToggle = function(id){
        // todos 数组找到id 为id isComplete !isComplete
        // 响应式？ 返回一个全新的todos 
        setTodos(todos.map(function(todo){
        return (todo.id == id) ? {...todo,isComplete:!todo.isComplete} : todo
        }
         
        ))
    }

    const onDelete = function(id){
        setTodos(todos.filter(todo => todo.id!==id))
    }
    
    return {
        todos,
        setTodos,
        addTodo,
        onToggle,
        onDelete
    }
    
}




