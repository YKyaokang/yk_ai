import { 
    useState //私有状态
 } from 'react'

const TodoForm = ({ onAddTodo }) => {
    // props 和 state 都是数据
    // props 参数数据
    // state 私有数据
    // 单向数据流
    const handleSubmit = (e) => {
        e.preventDefault();
        let result = text.trim();  // dry don't repeat yourself
        if(!result) return;
        onAddTodo(result)
        setText('');  //注重用户体验
    }
    const [text,setText] = useState('')
    return (
        // JSX 一定得有唯一的最外层元素  树来编译并解析JSX,
        <>
        <h1 className="header">TodoList</h1>
        <form className='todo-input' onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={text}
            onChange={e => setText(e.target.value)} //维护数据值和input状态的同步
            placeholder="Add a todo"
            required
            />
            <button type='submit'>Add</button>
        </form>
        
        </>

    )
}

export default TodoForm