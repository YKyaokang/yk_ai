function Person(name,age){
    // this 指向当前实例
    this.name = name;
    this.age = age;
}

Person.prototype.b =  [1,2,3,4];

let hu = new Person("吉他胡",18);
console.log(hu.__proto__);
console.log(Person.prototype); // true

console.log(Person.prototype.constructor == Person) ; // Person(...) { ... }