import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react + typescript
// 在大型项目中 javascript 可能有些问题，主要因为弱类型
// jsx 后缀改成tsx 
// 多写了一些代码 类型申明 代码质量保驾护航
// 函数进行类型约束
// const HelloComponent = (e) => {
//   return 1;
// }



function App() {
  let count:number = 10;
  let str:string = "Hello ts";
  const isDone:boolean = true;
  const list:number[] = [1,2,3];
  // 元组类型
  const tuple:[string,number] = ["释永乐",100]; 
  // 枚举类型
  const enum Status {
  Pending,
  Fullfilled,
  Rejected
}
  const pStatus:Status = Status.Pending;
  // 对象的约束
  //如何声明对象 接口
  // 用分号隔开 
  interface User {
    name:string;
    age:number;
    isSingle?: boolean;
  }
  const user:User = {
    name: "张三",
    age: 18,
    isSingle:true
  }
  return (
    <>
     <h1>
      {count}
      {str}
      {user.name} {user.age} 
      {/* typescript很严格 */}
      <HelloComponent name="一明" age="18" />
     </h1>
    </>
  )
}

export default App
