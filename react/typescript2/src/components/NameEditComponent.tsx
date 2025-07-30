import React from 'react'

interface Props {
    userName:string;
    // typescript 除了内置的类型外 自定义类型 class
    // React 提供的类型 事件类型 ChangeEvent
    // type = "radio" type=“checkbox”
    // HTMLInputElement event.target.value?
    // 重要地方约束 ： 除了函数的返回值外 函数的参数也一定要约定 严谨点，可以减少99.99 %的错误
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=> void; //声明它的类型是一个函数
}

const NameEditComponent:React.FC<Props> = (props) => {
    return (
        <>
            <label>Update name:</label>
            <input value={props.userName} onChange={props.onChange}/>
        </>
    )
}

export default NameEditComponent;