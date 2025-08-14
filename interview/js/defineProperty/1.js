// Object.defineProperty
var obj = {};
// es5 就提供的api 兼容性更好
// react 和vue 最新版 对浏览器有要求
Object.defineProperty(obj,"num",{
    value: 1,
    // 属性描述
    configurable: true, // 默认值
    writable: false,
    enumerable: false
    // get: function() {
    //     console.log('读取了属性')
    //     return this.value
    // }
})
// obj.num = 2;
// console.log(obj.value);
for (let key in obj ) {
    console.log(key + ' : ' + obj[key]);
}
obj.__proto__ = {
    value: 2
}

console.log(Object.getOwnPropertyDescriptor(obj, 'num'));
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.keys(obj));