//数组对象
const arr = ['a','b','c'];
console.log(typeof arr);
const date = new Date();
console.log(typeof date);
// 如何区分OBJECT 的这些类型?
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(date));

// 会在MDN 文档看一些资料
function getType(value){
    return Object.prototype.toString.call(value).slice(8,-1);
}

