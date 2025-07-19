// 如何遍历数组
// - for(let i =0) 计数循环 性能好 可读性不好 不是人脑，电脑
// - while 
// - forEach 无法停止
// - map filter some every ... 
// - for of 
const names = Array.of('Alice','Bob','Charlie','David');
// console.log(names)
names.forEach(name => {
    if(name === 'Charlie') {
        console.log('Charlie is here,stop...')
        return;
        console.log("hello")
    }
    console.log('Processing' + name);
})