# 路由

history 
hash 

- 传统页面开发 a标签
    重要的用户体验缺失    
    - 需要去到后端拿到新的html 重新渲染
    - 相比于react-router-dom 局部热更新
    - a 链接切换页面 会带来白屏效果
    前端路由 去负责
- 新的react-router-dom SPA 单页应用
    只有一个页面 但能带来多页面效果
    
## SPA
- Single Page Application
- 只有一个页面
    - react 组件
        页面级别组件
    - Routers/Route 申明，文档流种占位
    - Router外面，Outlet外面 不用更新的
    - url 
    - Route内部显示哪个页面组件
        热更新
    
    - 用一个页面完成了多个页面的显示问题
    - SPA 用户体验特别棒，

## 核心
- url 切换
    不能用a
    Link 
    不去重新发送请求
    事件 js 动态加载
    
- 事件 hashChange /pushState
- 根据当前的url,取出对应的组件
    替换掉之前的页面级别组件
- 体验是
    URL改变了，竟然不用刷新页面（HTML5 hash）
- 不再看白屏
    页面很块
    About
    Home 全是前端组件

## url 改变，但不重新渲染的解决方案
- hash 的改变 很早就有的（并非HTML5）
    原来是用来做页面锚点，长页面的电梯
    不会刷新页面
    #/
    #/ about
- 事件
    hashChange

## 基于SPA
- url 可以改变，但是不会向后端发送请求 前端路由
    - hash + hashChange + DOM 
    - history + pushState/popState 
- 前端路由react-router-dom 配置 页面级别组件
    热更新 Route
    Outlet
- 单页应用
    只有一个页面
    页面级别组件
    window.location window.history 
    栈
    State

- history 
    很早就有，在浏览器历史记录游走
    - html5 赋予history 新的功能
    - hash + hashchange 有优点 但是有很大的缺点
        优点：兼容性很好 
        缺点：http://127.0.0.1:5500/html5/router/3.html#home
        hash 不好理解 
        不这样，传统后端路由一样 
    怎么样向后端路由一样，不刷新页面？
    html5 升级了history api 来实现之