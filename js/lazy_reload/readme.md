# 图片懒加载

- <img src = ""/> 
  - 浏览器的下载线程
  - src http 应用层协议
  - https://img.36krcdn.com/hsossms/20250306/v2_6ea048ac01c3408a9ed6ebe79a8fc8a2@5888275_oswg849213oswg1053oswg495_img_png?x-oss-process=image/resize,m_mfit,w_600,h_400,limit_0/crop,w_600,h_400,g_center/format,webp 
    查询 ip 地址 
  - 发送 网路带宽有限 
  并发 同时下载多个css ，img支持的比较好的
  tcp/ip 
  - 网页（电商网页）太多了 50+
  - 滚动页面 加载
  - 一开始就src 全部加载，页面会打不开 
## 懒加载
  - 只加载需要的加载的
    - 可视区 
    - 滚动区域 scroll 
  - 不加载
    src 不能直接给，data-original ？
    src? img 功能函数？ 占位图
  - 占位图
    - src 应该设置  但不能请求原来图片的地址（并发太多，图片太大）
  - 给个占位的图片 比较小
    缓存 请求一次 
- 等页面渲染完成后
  img 太多会严重影响页面的打开速度 第一重要的
  data-original 中
  自定义属性  data- 数据属性
  图片的原地址是img 数据
  original 原来 