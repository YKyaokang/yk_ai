# 原型
- OOP 机制 Object Oriented Programming 面向对象编程
- 面向对象编程的三个特征
  - 封装 Encapsulation
  - **继承** Inheritance
  - 多态 Polymorphism

## JS OOP
- 对象字面量 一堆一样的对象创建麻烦 
- 类的概念。 没有class 关键字
- 构造函数不能省的
- 赋予函数新的使命,身兼两职
  类 + 构造函数 

## JS 面向对象更强大，它是原型式的
- 任何对象 默认指向Object __prototo__
    任何对象都有 __prototo__ 这个私有属性，对象和构造函数没有血缘关系(代孕)

- JS 本没有类 
  只不过用function 大写 来表示类，
- JS 对象和类，构造函数 没有血缘关系
  __prot__ 指向构造函数的prototype 对象
  __prot__ 可以指向任何的对象
- 不指默认是Object
- 原型对象、原型链

- 任何函数都有prototype 属性，用于指定通过改函数new 的对象 的__prot__指向的对象

prototype可以指向 任何对象

## new的过程
new -> {} -> construct 运行 -> this指向 -> 完成了构造
-> __proto__ -> construct.prototype -> Object  **原型链**
终点为null



