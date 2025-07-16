import {
    useReducer,
} from 'react';
import todoReducer from '../reducers/todoReducer'
// es6新特性 参数默认值
// {todos,} key value省略
// `` 模板字符串 
// 解构 [] = [] {} = {}
// 展开运算符, ... rest运算符
export function useTodos(initial = []){
    const [todos,dispatch] = useReducer(todoReducer,initial)
    
    //下面这些是函数
    const addTodo = text => dispatch({type: 'ADD_TODO',text})
    const toggleTodo = id => dispatch({type:'TOGGLE_TODO',id})
    const removeTodo = id => dispatch({type:'REMOVE_TODO',id})
    

    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo
    }
}

