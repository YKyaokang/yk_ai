function Person(name,age){
    this.name = name;
    this.age = age;
}

console.log(Person.prototype) ; // Person(...) {... }

// Person.prototype = {
//     sayHello: function(){
//         console.log("hello"+ this.name)
//     }
// }

console.log(Person.prototype) ; // Person(...) {... }
let zs = new Person("张三",18);
let ww = new Person("王五",20);
let zl = new Person("赵六",19);