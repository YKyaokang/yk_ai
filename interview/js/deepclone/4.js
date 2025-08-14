const target = {
    a: 1,
}

const source = {
    b: {
        name: 'hxt',
        hobbies: ['篮球','打瓦']
    },
    c: 1
}
// 深拷贝
// 常用的深拷贝API
const newObj = JSON.parse(JSON.stringify(source))  // 会生成一个新的对象
console.log(newObj)
newObj.b.name = '哈哈';
newObj.c = 2;
console.log(newObj,source);
