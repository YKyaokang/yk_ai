// {} key:value O(1) HashMap  (Es6 Map)
// 第一种重要且常用的数据结构 
// 在js中 不同 它不是一种单独的数据结构
// 第二种重要的数据结构 链表、队列、栈
// 长度限定、类型
// 可以、动态自动扩容  
const arr = [1,2,3]
const arr2 = new Array(5).fill(undefined)
console.log(arr2)
arr2[8] = undefined;
console.log(arr2)
// v8 引擎对数组 既连续 又存在hash操作
for (let key in arr2) {
    console.log(key,arr2[key])
}

for (let key of arr2) {
    console.log(arr2[key])
}