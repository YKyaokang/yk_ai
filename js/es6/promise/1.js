// 读取1.html里面的内容
// 读取完后 打印 读完了
const fs = require('fs');  // 引入js 内置的文件模块 （引入第三方库）
// 读取文件 是一个异步任务
// fs.readFile('./1.html',(err,data) => {
//     console.log(data.toString());
// })
// console.log('读完了');

const readFilePromise = new Promise((resolve) => {
    fs.readFile('./1.html',(err,data) => {
        console.log(data.toString());
        resolve()
    })
   
}
)

readFilePromise.then(()=>{
    console.log('读完了11');
})