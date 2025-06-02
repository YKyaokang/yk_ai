// 独一无二的值
const sym = Symbol();
const sym1 = Symbol();
const sym2 =  Symbol("desc"); // label 标签
console.log(typeof sym,sym); //symbol
console.log(sym === sym1); //false
// symbol 可以用于对象的key的创建
// 使用Symbol 构造函数实例化，一个标记为id 的唯一值
// ID 唯一性，Symbol 
const ID = Symbol("id"); // 独一无二的
//es6 之前 key 一定是 string
// Symbol之后 Symbol 可以作为key
const sex = '男'
const age = Symbol('age');
const user = {
    name: "Alice",
    //[]是动态属性名，会动态计算该属性的值
    age:2,
    [age]: 19,
    [sex]: 'name',
    [ID]:123
}

console.log(user);
console.log(user[ID],user.age,user[age])
