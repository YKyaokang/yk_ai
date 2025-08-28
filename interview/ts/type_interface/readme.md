# type 和 interface

- **相同点**
    都可以用来申明类型，自定义的类型

- 区别0
    type可以声明简单数据类型 联合类型 元组类型
    interface只能描述对象结构（函数、类）

- 区别1
    type 支持简单类型的别名
    interface不可以

- 区别2
    当我们要编写继承类的时候 ,interface只要extends就好
    type 使用的是& 并集

- 区别3
    interface支持多次申明合并
    type不可以

- 区别4：
    interface 和 type 在申明函数类型上有区别
    前者使用`(a:number,b:number):number`
    后者使用`(a:number,b:number) => number`


