// 一句代码
// v8引擎
// 变量提升
// 编译阶段
// 执行阶段
// 全局作用域中的变量
// window? 前端方式来运行
var a = 1;

// console.log(window.a); //window is not defined server （后端没有window）
console.log(globalThis.a) // ndoe 顶层对象

