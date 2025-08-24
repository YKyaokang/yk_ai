// thenable
function light(color,ms){
    console.log(color);
    return new Promise(r => setTimeout(r,ms))
}

function loop() {
    // 控制流程 异步变同步 
    light('red',1000)
    .then(() => light("yellow",3000)) // 第二个.then执行完 继续返回一个Promise
    .then(() => light("green",2000))
    .then(loop);
}

loop();