// 完成的功能
function objectFactory() {
  var obj = {};
  // 类数组上没有shift 借用数组的shift方法
  var Constructor = [].shift.call(arguments)  // 返回构造函数
  obj.__proto__ = Constructor.prototype 
  var ret = Constructor.apply(obj,arguments);
  
  // || null的
  return typeof ret === 'object'? ret || obj:obj;

}


function Person(name,age){
    this.name = name
    this.age = age
    return null
}



Person.prototype.sayHi = function() {
    console.log(`你好，我是${this.name}`)
}

let p = objectFactory(Person,'张三','18')
console.log(p)
p.sayHi()
console.log(p instanceof Person);


// let p = new Person('张三',18)
// p.sayHi()


// new Person(...) -> function[[construct]] -> &&this{}  -> [[call]] -> 返回construct {}.__proto__ -> Construct.prototype -> return{}
