# react 旅游 App
README.md 很重要 方便面试官
- 移动App 
- 模仿 App
    - 喜欢的、国外的
    - 优点改变
- 绝大多数的考点
    - 都适用于任何App

## 技术栈
- React全家桶
    React 组件开发
    组件封装
    第三方组件库
    受控和非受控组件
    hooks编程  自定义hooks
    React-Router-Dom
        SPA 单页应用
        路由守卫
        懒加载
    Zustand
- mock  接口模拟
- axios 请求拦截和代理
- jwt 登录
- module css
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo ......
- css 预处理器 stylus
    flex transition transform
- LLM
    - chat
    - 生图
    - 语音
    - coze 工作流 调用
    - 流式输出
- 移动端适配
    rem 
- 单例模式 设计模式的理解
- git 提交等编程风格
## 项目的架构
- components
- pages
- store
- hooks
- api
- mock

## 开发前的准备
- 安装的包
    react-router-dom zustand axios 
    @react-vant/icons
    react-vant （第三方UI组件库）  lib-flexible  适配移动端
    开发期间的依赖
    jwt  vite-plugin-mock 
    postcss postcss-pxtorem  
- vite 配置
    - alias
    - mock
    - .env.local
        配置 llm apiKey
    - user-scalable=no  禁止用户缩放
    - css 预处理
        index.css   reset
        box-sizing  font-family:-apply-system
        App.css     全局通用样式
        module.css  模块化样式
    - 移动端适配 rem
        不能用px，使用相对单位rem html
        不同设备上体验要一致
        不同尺寸手机 等比例缩放
        设计师设计稿 750px iphone 4 375pt *2=750
        小米
        css  只有一行代码   手机的不同尺寸 html font-size 等比例
        layout
        flexible.js 阿里  在任何设备上
        1rem = 屏幕宽度 /10
- lib-flexible
    阿里开源
    设置html fontSize=window.innerWidth / 10
    css px 宽度 = 手机设备宽度 = 375
    1px = 2发光源
    750px 设计稿

- 设计稿上一个盒子的大小？
    - 1 像素不差的还原设计稿
    - 设计稿中像素单位
    - /75   其实就是 750px为10rem  假如是200px  200/750*10=2.67rem => 200/75

## 项目亮点
- 移动端适配
    - lib-flexible  1rem = 屏幕宽度/10
    - 设计稿 尺寸是iPhone 标准尺寸 750px
    - 前端的职责是还原设计稿
    - 频繁的单位换算 比如260/75
    - 自动化？ 
        postcss + postcss-pxtorem
        postcss 是css 预编译器，很强大
        vite 会自动读取postcss.config.js 将css文件 内容编译
        px 转 rem
    - 智能生成图片
        - 产品
        冰球社群的宠物运动员 智能出图 
        社交属性
        - 商业价值
        技术服务
        coze 工作流 智能编排AI 流程 编程的一种
        - api 调用 

    - 设计工作流
        - 创建工作流 ani_pic
            上传宠物照片，生成宠物曲棍球运动员照片
        - 代码节点
            参数校验和逻辑功能，返回运行的结果
        - 图片生成流程
            - 图片理解插件 计算机视觉
            - 大模型 特征提取 (系统提示词 + 用户提示词)
            prompt 
        - workflow_id
            workflow_id=7533134933922938931`    
## git 提交规范
- 项目初始化
## 功能模块
- UI 组件库
    - react-vant 第三方组件库  70%的组件已经有了，不用写
    - 选择一个适合业务的组件库 或者公司内部的组件库
- 配置路由以及懒加载
    - 懒加载
    - 路由守卫
    - Layout组件
        - 嵌套路由有Outlet 分组路由配置
        - 网页有几个模板 Layout
            - Route 不加path  对应的路由自动选择 
            - tabbar 模板
            - blank 模板
    - tabbar
        react-vant  + @react-vant/icons
        - value +  onChange  响应式
        - 直接点击链接分享  active  的设置
- chatbot
    - llm 模块 chat 封装
    - 迭代chat，支持任意模型
- Search
    - 防抖
    - api 
        GoogleSuggest
    - localStorage
- 瀑布流
    - 小红书等主流App的内容浏览用户体验产品
        两列、图片高度不一致 、落差感
        滚动加载更多、图片懒加载
    - 接口 
        /api/images/?page=${n} 支持翻页
        随机图片 高度随机
    - images 怎么放到两列中 MVVM
    数组驱动界面（2列） 奇偶 
    瀑布流随机数据生成
    - 加载更多 位于盒子底部的 通过使用 IntersectionObserver
    观察它是否出现在视窗，性能更好，使用了观察者模式
    组件卸载时，直接使用observer.disconnect() 释放资源 防止内存泄漏
    - key id 下拉刷新
    - 使用IntersectionOberver 再次图片懒加载 data-src

## 项目亮点难点
- 前端智能
    - chat 函数
    - 对各家模型比较感兴趣，升级为kimiChat，doubaoChat...灵活
        性能、能力、性价比
        随意切换大模型，通过参数抽象
        函数重载
- 原子css
    - App.css 里面添加通用样式
    - 各自模块里面module.css 不影响别的组件
    - lib-flexible  适配移动端
    - postcss pxtorem  插件 快速还原设计稿
    - 原子类css，
        一个元素按功能逻辑拆分成多个类，和原子一样
        元素的样式就可以由这些原子类组合而成
        样式可以复用的更好，以后几乎可以不用写样式
- 用户体验优化
    - 搜索建议 防抖+usememo
    - 组件粒度划分 
        React.memo + useCallBack
    - 懒加载
    - 热门推荐 + 相关商品 （产品）
    - SPA
    - 股价屏 不用让用户等待了 
    - 文件上传的preview html5的FileReader 
- coze 图片要上传到coze中
    - uploadFile + workflow_id + token
    工作流需要的参数 
    

## 项目遇到过什么问题，怎么解决的
- chat messages 遇到messages 覆盖问题
- 闭包陷阱
    一次事件里面，两次setMessages()
- 瀑布流？
    - 骨架屏
    - 奇偶images 两列分配可能有时候会像天残脚，不好看，随机
        两个响应式数组，判断哪一列高度更少，将新得到的img加入那个数组        
    - intersectionObserver 用的两次，重复了，dry原则 封装?
        hooks
- toast 组件封装
    - 需要自定义，UI组件库不满足需求 
    - 自定义UI props 
    - JS 显示出来 跨层级通信
        观察者
    - mitt eventBus 事件总线
    - 订阅者使用on方法 可以订阅某个事件类型
    - 发布者可以使用emit方法 发布事件 此时 订阅者就能监听到 并且执行回调函数
    - 这样子做就能实现一个全新的组件通信方式 跨层级  


- 自定义hooks
    - useTitle
    一定要设置

- es6 特性使用
    tabbar 高亮
    - arr.findIndex
    - str.startsWith
    - promise

- 项目迭代
    - 功能由潜入深
    - chatbot  deepseek 简单chat
    - deepseek-r1  推理模型
    - 流式输出
    - 上下文
    - coze 工作流接口调用

## 开发顺序
- 先造一个可运行的DEMO（安装依赖 插件等）
    - 写路由
    - 写布局
- 开始开发每个页面以及功能
    - 先测试api
    - 造页面时：先静态 后动态


## 通用组件开发
- Loading
    - 居中方案：
        position:fixed + tlrb0(四个方向为0) + margin + auto 
    - React.memo 无状态组件，不重新渲染
    - animation