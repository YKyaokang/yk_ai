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