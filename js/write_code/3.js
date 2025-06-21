// 完成的功能
function objectFactory() {
    var obj = {}
    var Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype 
    var res = Constructor.apply(obj,arguments); //执行构造函数后 接受return的结果
    return typeof res === 'object'? res:obj;  //用三目运算符 执行判断逻辑
}

function Person(name,age){
    this.name = name
    this.age = age  
}

let person = objectFactory(Person,"张三",18)
console.log(person)  

