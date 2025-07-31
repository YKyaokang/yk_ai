# 总结一下项目中需要安排的地方 

### memo三件套
- memo 缓存组件：使其只渲染一次 对于一些不需要经常渲染（里面不怎么带数据的组件）
- usememo:对于一些需要缓存的 数据 比如防抖函数
- useCallback:对于一些组件中安排了函数 需要用useCallback进行优化

## react



## CSS部分
- 原子CSS 
- postition:fixed t0 l0 r0 b0 的技能点
- grid布局排列
- 模块化CSS CSS IN JS
- animation 比较吊的css动画 模拟加载等

### 前两天强调的移动端适配
- rem三件套
- index.html的必要

### mockjs
使用mockjs当作模拟接口来用 
- mockjs的使用方法

### 组件之间的父子通信
搜索框案例的父子间通信
结合zustand 实现搜索栏的功能
- 受控与非受控的配合使用
主要方式 受控：onChange
对于一些操作 非受控：useRef
结合着用


### axios
baseURL和拦截器


### llm
大模型的使用


### typescript
暂定


### 使用插件的mockjs兼容性更好一点

## **注重用户体验**
开发原则 注重用户体验
- 响应式组件 ：x的使用
- mock拿不到数据前 设置股价屏
- 注重渲染顺序与useEffect里面的发送接口的顺序
- 注重不要踩坑：一定要在store等地方设置初始值
- useTitle一定要安排
- 瀑布流 
- Toast定制 mitt
