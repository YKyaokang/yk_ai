// 没有Class 的JS 如何在苦苦追求 OOP
// 首字母大写 约定
// 既是类 又是构造函数
function Person(name,age){
    // this 指向当前实例
    this.name = name;
    this.age = age;
}
// 函数对象  原型对象
// 类的方法
Person.prototype = {
    sayHello: function(){
        console.log("hello"+ this.name)
    }
}


let hu = new Person("吉他胡",18);
// 原型对象 
hu.sayHello(); // hello 吉他胡
// new 一下 实例化对象
// console.log(new Person("吉他胡",18)); // Person
// console.log(new Person("小公主",18)); // Person

console.log(hu.__proto__.__proto__);
let o = {name:"aah"};
console.log(o.__proto__);
console.log(o.toString());
console.log(hu.toString())


const zs = {
    name: "张三",
    age: 18,
}

const ww = {
    name: "王五",
    age: 20,
}

const zl = {
    name: "赵六",
    age: 19,
}









