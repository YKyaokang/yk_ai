const arr  = [1,2,3,4,5];
// const removed = arr.splice(2,2);
// console.log(removed);
// console.log(arr);
// // 如果不修改？ 移除但又不改变原数组 splice 不能用

const newArr = arr.slice(0,2).concat(arr.slice(2));

console.log(newArr,arr);

// const arr2  = [1,2,3,4,5];
// const res = arr2.unshift(1);
// console.log(res);