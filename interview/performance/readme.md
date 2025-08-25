# 性能优化
重绘重排几个手段
- css批量处理
    - cssText
    - classnName
- 文档碎片 `const fragment = document.createDocumentFragment();` 
- 通过下线某些元素 设置脱离文档流和display:none
- 缓存布局信息（针对于一些offsetTop） 由于offsetTop(为了获取最新的页面 强制进行重排)
    
## 重绘重排
- 重绘
    当元素样式改变但不影响布局时，浏览器重新绘制受影响的元素的过程。如改变颜色，背景等。
- 重排++++++++
DOM
```js
    // 不对 多次操作可能触发多次重排重绘
    // 虽然现代浏览器会合并修改
    // 但是可以避免
    const el = deocument.getElementById("myEl");
    el.style.width = "100px";
    el.style.height = "100px"
    el.margin = "10px"
    // good
    el.style.cssText = "width:100px;height:100px;margin:10px";
    el.className = 'my-class'  // 用类名而不是一堆的js代码
```


### 使用文档碎片
```js
const fragment = document.createDocumentFragment();
for(let i = 0 ; i < 10 ; i++)
{
    const el = document.createElement("div");
    fragment.appendChild(el)
}
document.body.appendChild(fragment);
// 批量添加元素，使用document.createDocumentFragment()优化
```

## 脱离文档流进行操作 下线(通过display:none将其先下线)
```js
const el = document.getElementById("myEl");
el.style.position = 'absolute';
el.style.display = 'none';s
... 进行大量DOM操作
el.style.display = 'block';
el.style.position = 'static';
```

### 缓存布局信息

```js
// offsetTop 读取，但是每次都会触发重排以获得盒子的布局信息
for (let i = 0 ; i < 100 ; i++) {
    el.style.top = el.offsetTop + 1 + 'px';
}


let top = el.offsetTop; // 缓存布局信息
for(let i = 0 ; i < 100 ; i++)
{
    top++;
    el.style.top = top + 'px'
}
```

### 使用transform 代替位置调整
```js
    el.style.left = '100px';
    // 只触发重绘，性能更好
    el.style.transform = 'translateX(100px)';
```


## 资源加载优化
    - 图片懒加载
    - 路由懒加载
        代码文件上 ,code spliting 代码分割（性能优化到极致）
    - 资源预加载（多路复用，服务器推送）
    未来可能会用到的资源
    <link rel="prefetch" href="/next-page.js">
    dns-prefetch dns 预解析
    preload 当前页面必须资源，立即加载
    - script 资源的加载 阻塞的
        default 
        async 异步下载 不保证顺序 ： 应用于不依赖脚本的场景（独立脚本） 可能在DOMContentLoaded前或者后
        defer 异步下载 不阻塞HTML解析 脚本会在html解析完成后 DomContentLoaded前 应用于需要依赖的场景，比如将vue脚本（同步代码需要依赖vue）的脚本以defer放在头部
        module 
    - webp 格式图片 （同样的清晰度，图片大小小了）
        Google开发的现代图片格式，图片的优化，显著的减少体积，并质量不受影响
    - 图标字体库
    - 减少http请求数
    

## JS执行优化
    - 防抖节流（耗内存 并且对服务器压力小）
    - web workers 处理复杂计算
    - requestAnimationFrame 优化动画
    - requestIdleCallback React Fiber 机制 
        schedule 机制

## 框架层优化
    - memo,useMemo,useCallback 避免不必要的
    - shadcn-ui 按需加载组件库
    - 合理使用key 优化列表渲染

## 缓存策略
    - 强缓存和协商缓存
        Expires（客户端时间不准确） / Cache-Control
        LastModified if-modified-since 时间戳 304
        ETag if-none-match
    - localStorage/sessionStroage/cookie 
## 网络优化
    - CDN加速
        静态资源，分流，会缓存文件
        多路复用 多域名服务器 img1.baidu.com img.baidu.com
    - Gzip压缩
    - HTTP/2 多路复用
    - DNS 预解析

## 首屏优化
    - SSR 
        组件渲染在服务器端已经完成编译、执行，浏览器端直接显示
    - 骨架屏
    - http 2.0 server push 首屏数据推送
    
## 性能测试
    - chrome 的performance面板
    可以看到各项性能指标，针对性的优化，给出优化建议

    - 减少首屏JS/css 体积 （code spliting）
    代码分割是一种将代码库拆分成更小，更易管理的块的技术，以便按需加载或并行加载，从而优化应用的加载性能和执行效率
    - 使用transform代替位置调整，预加载相关资源
    掘金 js = (vue + vue-router) + App.vue + Home.vue + Components 
    vue + vue-router 单独拆分 (更好地强缓存) 基本是不会变的
    App.vue + home.vue + Components 业务代码 经常改，单独
    做了一次升级

- lighthouse
    是chrome 的一款性能打分插件，会在 性能、无障碍、最佳实践、SEO 打分
    并给出问题和优化建议，非常细致
    - 图片大小 webp
    - 字体库
    - 渲染屏蔽请求

## 性能的关键指标
- FCP First Contentful Paint,FCP 是衡量网页加载性能的指标，表示浏览器首次渲染出页面内容（如文本、图片等）的时间
- LCP Largee Contentful Paint LCP 是衡量网页加载性能关键指标，表示页面中最大可见内容元素（图片、视频、或文本块）完全渲染完成的时间

    

