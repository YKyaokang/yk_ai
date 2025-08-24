# dns

- 全称 Domain Name System
- 把好理解和记忆的域名解析成IP地址的分布式数据库系统
    浏览器在真正发起HTTP(s)请求前，通常都会做一次DNS解析
- 一条命令
    ping www.baidu.com 递归查找的过程，结果IP

- dns 解析过程
    url 输入到页面显示的第一站
    解析dns
    - 补充url 的完整性
    - dns 浏览器缓存
        chrome://net-internals/#dns
        第一次访问的，需要解析，否则使用缓存的
    - 操作系统里的缓存
        ipconfig /displaydns
    - hosts 文件配置
        指定域名 解析IP 手动配置

    - 如果上面都没有，也就是没有命中缓存
        迭代查询
        假设 www.baidu.com
        分布式数据库 key => value key domain value ip地址
        dns 软件 13组跟服务器的ip 地址和域名
        写死的
        
        - 根域名服务器
            .com 的地址是多少
        - 顶级域名服务器
            baidu.com 服务器在哪
        - 权威域名服务器
            IP地址 
        最后将当前已得到的Ip地址返回给客户端 并且缓存在本地dns服务器中
        局域网 -> 城域网(电信或移动服务商) 
        最后
- 设备用ip地址去建立TCP连接 三次握手 使用http请求 四次回收 

- dns优化
    dns-prefetch 和渲染线程不会相互阻塞
    dns-prefetch dns 预解析 
    <link type="dns-prefetch" href="//g.alicdn.com">
    网络层的优化
- pre-connect
    tcp 连接提前 通道打开，多路复用
    <link data-n-head="ssr" rel="preconnect" href="//unpkg.byted-static.com/" crossorigin="anonymous">
ping www.baidu.com
PING www.a.shifen.com (183.2.172.177)
    a.shifen.com是什么意思？ 
    百度用于搜索服务的内部域名系统
    域名 -> ip不是绝对的
    域名背后 一堆的服务器 分布式的 多地的机房（就近原则）
    - 负载均衡
        挡在前面 
        容灾、高性能
        算法，服务器 a.shifen.coms
        当前哪些机器还有接待的能力 ， 随机性
    - CDN 服务器
        Content Delivery NetWork
        内容分发网络
        部署静态资源的 
        访问内容分成两部分 
        动态的，走中央服务器    
        静态的，css/js/jpg,CDN服务器
          双 11 ,  
    
    
    
