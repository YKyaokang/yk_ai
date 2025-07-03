# Storage 存储

  - 前端存储
    - cookie
    存储啥玩意 
      - 登录状态
      - 购物车 
    - localStorage
    - sessionStorage
    - indexDB
  - 后端存储
    MYSQL NoSQL MongoDB  
  - 缓存
    
  端口 -> 某个服务
3306 mysql 服务 进程（资源） 线程（执行）->入栈
domain(localhost) -> ip 地址(127.0.0.1)
一个ip地址背后对应的是? 某台设备 -> port 设备上的某个服务（进程）
一台设备上可以很多端口使用，有多个http服务 
不要使用一些特殊的端口 


## 首页 
- 用户的登录状态
  cookie
  - 服务器识别用户
  - B/S 架构软件 http协议 
  - http 0.9 版本 没有身份 
  - http 是无状态协议 
    请求一次和1000次，拿到的内容都一致 基于 
    身份状态？
  - http 1.0 正式版
    header 请求头 
    Content-Type:
    Authorization
    Cookie uid = 124122
    用户带上，服务器解析 你的身份了
    http 协议还是无状态的，请求头 可以夹带一些私货
  - 界面有哪些状态 
    未登录 已登录 用户身份 时间 过期的 主动登出

- 前后端联调
  - 前端负责表单 
    阻止默认行为
    收集表单值
    fetch 请求 await 等待服务器端响应请求 
    POST / login api 地址 前后端接口
    后端
    路由 /login
    用户名和密码的校验 
    通过设置一个cookie  请求头 响应头 Set-Cookie
    前端存储里 Cookie 有了内容
    
## Cookie 
Cookie 是浏览器存储的小文本数据，用于记录用户会话、偏好等信息，便于网站识别用户。
- 每次访问http的时候，会自动带上cookie 信息 
- cookie 小饼干 （内容小） 关键的身份信息 ，存储在浏览器中（位置）

- http 协议仍然是无状态，每次请求独立，它是通过在请求头中携带cookie 信息，实现身份认证。
