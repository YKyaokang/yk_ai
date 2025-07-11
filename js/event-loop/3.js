console.log('start');
// node 微任务 用队列:先进先出
// process 进程对象 隶属于微任务 当node环境下 执行
process.nextTick(()=>{
    console.log('Process Next Tick')
})
// 微任务
Promise.resolve().then(() => {
    console.log('Promise Resolved')
})
setTimeout(()=>{
    console.log('haha')
    Promise.resolve().then(()=>{
        console.log('inner Promise')
    })
},0)
console.log('end');


// 好奇:为什么Promise.then会是微任务 那如果这个不在最后一行代码的话 会怎么样