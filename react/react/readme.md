# react 事件机制
- js 事件机制
    - 异步
    - 监听一个事件
        - addEventListener() DOM2事件
        - DOM0 事件 （标签里面进行） <a onClick = "doSomething()"> </a>
        - DOM1 事件？ DOM 版本，没有DOM事件相关的迭代更新 没有去做事件升级  

    
    - addEventListener(type, listener, useCapture?)

        - 回调函数callback 异步处理的总称 
        - promise then 
        - async await 
        - 监听器
- 注册事件 addEventListener     
- useCapture false 默认值 
    页面是由浏览器渲染引擎按像素点画出来 png 
    先捕获 document -> 一层层去问 
        点了谁？
        先触发父元素 
    event.target  
        捕获阶段结束，拿到event.target 
    冒泡
        event.target 冒泡到html 回去到根节点
        事件让他在冒泡阶段执行
        在哪个阶段执行

    
        