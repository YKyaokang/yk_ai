// 请问，你在项目开发中具体使用过吗?
// 目标对象是{}空对象 合并用户传参和默认参数 
// Object.assign()收入囊中
function createUser(options) {
    const defaults = {
        name: '匿名用户',
        age: 18,
        isAdmin: false
    }

    const config = Object.assign({},defaults,options)
    console.log(config);
    console.log(defaults)
}

createUser({
    name: '张三',
    age: 20,
    isAdmin: true
})



