//两种声明方式
const bigNum = 123456789012345678901234567890123456789n;
const theNum = BigInt("123456789012345678901234567890123456789"); //传参需要用字符串的方式 

console.log(bigNum,theNum,typeof bigNum,typeof theNum,typeof 1,typeof 1n);
console.log(bigNum + 1n);


// //使用前
// 1.2345678901234568e+38
// //使用后
// 123456789012345678901234567890123456789n