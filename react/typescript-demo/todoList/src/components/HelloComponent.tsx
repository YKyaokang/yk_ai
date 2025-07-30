import React from "react"
// 如何约束函数的返回值为ReactNode? JSX
// FC = FunctionComponents
// 如何约定自己需要一个name 的 prop?
interface HelloProps {
    name:string;
    age?:string;
}

// typescript 类型约束， 重要的地方一定要约束 
// 参数，返回值
// 泛型 泛指内部的类型 
const HelloComponents:React.FC<HelloProps> = (props) => {
    // const { name } = props
    return (
        <div>
            <h2>Hello User:{props.name}</h2>
        </div>
    )
}
export default HelloComponents