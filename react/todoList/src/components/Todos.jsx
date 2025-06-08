import '../css/Todo.css'
// 列表的渲染
function Todos(props){
    //如何拿到父组件传过来的数据呢？？ 传参
    const todos = props.todos
    return (
        <ul>
            {
                todos.map(todo =>
                <li key = {todo.id}>{todo.text}</li>
                )
            }
        </ul>
    )
}

export default Todos;