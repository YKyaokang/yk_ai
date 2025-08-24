// 需要实现同步阻塞
let sleep = (ms) => new Promise(r => setTimeout(r, ms)) 

(async () => {
    console.log("begin");
    await sleep(2000);  //await的右边是promise，异步变同步 只有当Promise 状态为fulfilled 才会执行后面的代码
    console.log("end");
})

