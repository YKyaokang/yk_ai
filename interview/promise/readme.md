# Promise.all

- MDN 定义
    Promise.all 方法接受一个promise的**iterale**类型的输入(Array,Map)
    并且只返回一个Promise实例。输入的所有Promise的resolve回调结果是一个数组。并按顺序存放。只要任何一个输入的reject 回调执行，就会抛出错误，Promise.all就会失败，catch执行。reject 是第一个抛出的错误

    如果有promise 子项失败，那么其它还没有完成的promise 会继续执行，只不过结果不重要了

- race,any,allSetted,allSettled
    这一组Promise 上的静态方法，带来了promise的并行
    async await 简单，不需要then链式调用，优雅的异步变同步，但也不能乱用
    如果多个promise值前后有依赖， async/await有优势，但如果没有，则Promise.all并发更快

    如果并行业务需求，all/race/any/allSettled


