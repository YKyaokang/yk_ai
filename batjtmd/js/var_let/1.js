"use strict"  //启动严格模式
var b = 10;
// 修正拼写错误，将 funciton 改为 function
(function b() {
    b = 20;  // 不生效的
    console.log(b)
})()


