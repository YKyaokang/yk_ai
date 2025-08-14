const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}
// 递归 + 拷贝
// 对数组支持不好
console.log(JSON.parse(JSON.stringify(target)));

function clone(source) {
    if (typeof source === 'object')
    {
        let cloneTarget = {};
        for(const key in source) {
            cloneTarget[key] = clone(source[key]);
        }   
        return cloneTarget;
    } else {
        return source;
    }
}