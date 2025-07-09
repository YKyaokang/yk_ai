### hooks todos

- 安排个css 亮点
    - stylus 
        css 超集（css的功能都有）
    - 拥有vite 脚手架
        stylus 预编译 安装stylus vite 直接编译 （官方react脚手架不如vite）
        vite来自vue 社区
    - react 组件设计
        - 开发任务单元
        - 设计组件
            界面功能 状态 响应式 
            - 新建todo 表单
            - 修改 列表 
            - 删除
        - 按功能划分 粒度
            - form 事件
            - list 列表
                - Item 组件 维护和**性能**(一个大组件里面放多个小组件 有助于性能的优化--根据useEffect等)
- 字体
    - 设置多个，设备的支持（本地包含）（默认字体）
    - 苹果设备 -apple-system 前端负责用户体验，字体也是美感的一部分
- 相对单位（适配移动端）
    - 移动端的重要单位（移动端不要用px）
        移动端 宽高不定的 rem（html font-size ） vw/vh em相对单位    
        使用相对单位，可以在所有设备上适配 
        em 相对于自身的font-size 等比例
- props 组件通信
    - 传递的状态(数据) 
    - 传递自定义事件
    - 直接解构(当参数不多时)
        const {} = props 单独解构(参数多时)

- vue 和react 区别
    - vue 好入门，api好用
    - react 倾向于原生JS 入门难
        - hooks ？ 
    - 
- 数据绑定
    - 变量 修改值
    - 数据状态
        - Data binding **数据**绑定 jsx 就是静态的
        {} 数据绑定 
        - 数据和界面的状态的统一 
            - 界面由数据驱动 
            - 数据和页面状态的一致性
        - 响应式的 
    
        （vue - 双向绑定  react 坚持 单向绑定）

- 本地存储
    - localStorage (html5推出) 
        key:value 存储 
        setItem(key,value)
        getItem(key)
        removeItem(key)
    - BOM Browser Object Model 浏览器对象模型
    - DOM Document Object model 文档对象模型
- 本地存储
    - localStorage 和 cookie 有什么异同
    - http 无状态,head cookie 带上
    - cookie 太大，影响http 性能 4kb 
    - cookie 前端，后端都可以设置
        过期时间
        damain 隔离
    - localStorage 只在浏览器端
        domain
        todos 
        5MB
    - IndexDB 数据库 GB 
# 自定义hooks
    - 自己定义的
    - use 某一项功能
        简单函数的封装
        响应式的状态
        effect 
        todos  
- 自定义hooks
    - 现代react app 的架构一部分
    - hooks目录
        自定义hooks 
        框架common部分
        业务定制 ahooks 
    - use开头
        state,effect 逻辑封装复用
    - return 
        todos
        toggles
        addTodos
        delelteTodos
        函数式编程思想的体现
    - 组件更好地聚焦于模板渲染
    - 全面hooks函数式编程

- 两个遗憾
    - ../../ 路径山路18弯
        vite 配置alias 短路径
    - toggle、delete 跨越组件层级有点复杂 useContext 