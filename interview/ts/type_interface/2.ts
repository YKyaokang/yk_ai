interface Person {
    name: string
}
// 继承 
interface Employee extends Person{
    job:string
}
// 类型声明
type PersonType = {name:string}
type EmplyeeType = PersonType & { job: string}  
