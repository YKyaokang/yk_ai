function Person(name,age){
    // this 指向当前实例
    this.name = name;
    this.age = age;
}


Person.prototype = {
    sayHello: function(){
        console.log("hello"+ this.name)
    },
    name:"庄子"
}

let a = {
    name:'孔子',
    country:'中国'
}
var hu = new Person("吉他胡",18);

hu.__proto__ = a;
console.log(hu.__proto__);
