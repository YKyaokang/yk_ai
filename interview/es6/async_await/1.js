// async/await 的实质：Promise 的语法糖

// 1. async/await 写法
async function foo() {
    const a = await BarProp();
    return a + 1;
}

// 2. 等价的 Promise 写法
function fooPromise() {
    return new Promise((resolve,reject) => {
        BarProp().then(a => {
            resolve(a + 1);
        })
    })
}

// 本质就是语法糖 只是写法更简洁，更同步

