# generator 生成器

本质上，async/await 是对Promise + Generator 的封装
    generator 思想很好，* 区别于普通函数 yeild 暂停
    运行得到一个生成器迭代对象 next() value 和 done 状态
    太复杂了，
    async 函数内部会被编译成一个状态机（等待？完成？）
- async/await 简单优雅，但不要滥用，并发，请用Promise.all
    