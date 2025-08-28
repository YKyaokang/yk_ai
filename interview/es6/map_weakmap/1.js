// node环境下 只有global 顶级对象 没有window
// global.gc();  // 手动触发垃圾回收
console.log(process.memoryUsage());

let map = new Map();
let key = new Array(1000000);

map.set(key,1);

console.log('第二次调用',process.memoryUsage());

key = null; //手动释放

console.log('第三次调用',process.memoryUsage());
map = null;
global.gc();
console.log('第四次调用',process.memoryUsage());



