# 数组上的方法

## 分维度来回答，带上业务场景

- 是否修改原数组，非纯函数，有副作用。要慎用
    push/pop/shift/unshift 栈/队列操作
    shift/unshift 性能差，移动元素 （数组是连续）     

    splice(删除/插入/替换) 
    splice(start，deleteCount，item1，item2，...)

- es6 新增方法
- 遍历/查找类/转换类/拼接类/统计类
    es5 提供了indexOf，lastIndexOf
    es6 提供了find 查找满足条件的元素 第一个元素
    findIndex 查找满足条件的元素，第一个元素下标
    includes 是否含有
    在最近的新版本 es15 2023 findLastIndex 
    (为什么不叫JS6而是叫ES6 基于ECMAScript 脚本标准开发的)
    ES5 兼容性
    ES6 新特性
    ES6+ 新特性持续在关注

    - 过滤和判定
        filter
        every
        some
        any
    - 拼接/裁剪
        concat slice
    - 扁平化
        flat flatMap
    - 迭代器 iterable
        keys() values() entries()
    - join/toString() 拼接
    - 归约 
        reduce