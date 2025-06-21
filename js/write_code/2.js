function Person(name,age){
    this.name = name
    this.age = age
    return 1
}

var person = new Person('张三',18)
console.log(person)