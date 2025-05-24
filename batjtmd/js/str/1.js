/**
 * @func 反转字符串 
 * @param {string} strs
 * @return string 
 */
// function reverseString(str){
//     //str是字符串 简单数据类型 primitive
    
//     return str.split('').reverse().join('');  // 字符串转数据对象  
    
// }
// 函数表达式
//es5 函数表达式
const reverseStringbyES5 = function(str){
    return str.split('').reverse().join('');
}

//es6 箭头函数 function 不要了 用箭头代替 左边是参数部分 右边是代码部分 
// {} 也省了 只有一句话的时候 
// 他是返回值的时候  连return 都可以省略
// 当只有一个参数的时候，括号也可以省略


const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('hello'));

