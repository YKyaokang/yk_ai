# 深浅拷贝
- Object.assign() 开始
    用来浅拷贝 简单、功能强大
    Object.assign()方法用于将一个或多个源对象的所有**可枚举**属性复制到目标对象
    并返回修改后的目标对象，常用于对象的浅拷贝或属性合并
- 返回是新对象？ 不是 返回修改后的target对象
- 不支持深拷贝 
    深拷贝 考虑安全问题 当对象层次比较深，管他有多深，都能一直拷贝，不会影响原对象
- 怎么支持深拷贝
    JSON.stringfy

- 面试官的想法
- 深拷贝、浅拷贝是必考内容
- 以Object.assign（） 开始
    - 表演时间 面试是当面展示自己
    - API细节 -> 业务场景(怎么用) -> 赋值 + 引用浅拷贝


    JSON.parse(JSON.stringify())最简单的方法，问题
    不会拷贝函数（不知道怎么序列化）,symbol，undefined，循环引用

    - 赋值和引用的概念 

    手写深拷贝

- 如何拷贝，看业务
    - 如果是简单数据类型，= 就好，
    - 如果是浅的对象或数组
        Object.assign()
        Array.prototype.slice
        Array.prototype.concat
    - 简单深拷贝 Object.parse(Object.stringify(source)) 
      比较简单：由于JSON.stringify的序列化规则
      undefined,funciton,Symbol不是合法的JSON值 


    - 手写实现 高级深拷贝
        - JSON.stringify() 没办法拷贝的
        - 拷贝、简单、遍历、复制
        - 深度、递归


     
