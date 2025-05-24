// 包装类
let a = "abc";
let b = new String("abc");
console.log(a == b) //值相等
// js 给所有的简单数据类型提供了 响应类型的类 包装类
console.log(a === b) //类型不同
console.log(b.split('')) // 包装类可以调用方法

// js 会主动把简单数据类型 包装成对象:
// 为了 统一面向对象写法:

// a -> new String(a)
console.log(a.split('')) // 隐式转换成包装类
// 之后会销毁对象，回归原来的简单类型