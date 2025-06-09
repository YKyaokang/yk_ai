// 内置的hook 函数
import {useState} from 'react' //引入react中的useState钩子函数，用于管理组件状态，useState返回一个数组，第一个元素是当前状态值，第二个元素是一个函数，用于更新状态值。

import TodoForm from './TodoForm' //引入TodoForm组件
import Todos from './Todos' //引入Todos组件
import '../css/TodoList.css'
function TodoList(){
        const [todos,setTodos] = useState([
            {   
                id: 1,
                text: "吃饭",
                completed: false
            }
        ])
    const [title,setTitle] = useState("Todo List") //初始化title状态值为"Todo List"，setTitle函数用于更新title状态值

    const handleAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text: text, // 新的待办事项文本
                completed: false // 新的待办事项是否完成
            }
        ]

        )
    }
    setTimeout(() => {
        setTitle("变化后的Titile") 
    }, 2000)
    return (
        <div className="container"> 
            <h1 className='title'>{ title }</h1>
            {/* 表单 */}
            <TodoForm onAdd={handleAdd}/>
            {/* 列表 */}
            <Todos todos = {todos}/>     
           
        </div>
    )
}

export default TodoList; //向外输出该组件