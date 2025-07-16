## useState
- 注意更新时，丢弃原来的状态，创建新对象 （跟快照有关哦）
- 响应式编程 单向绑定 （例子比如 onChange事件）
-状态更新会触发组件重新渲染

### 状态的props 单向流
    - 传递值
    - 自定义事件
    - chilren

## useEffect
- 渲染后完成
- 不会阻塞浏览器的绘制
- 适用于大多数副作用场景

## useLayoutEffect
- DOM更新之后
- Layout 布局之后
- 实际绘制之前  

特性：
- 同步执行，会**阻塞浏览器的绘制**
- 避免视觉上的白屏

## useContext
- 解决多层组件间通信问题
- createContext 创建Context
- useContext 使用Context
- Provide 上下文

## useRef
- 绑定元素


# else其它REACT OR JS 复习知识点

- 微任务
- 宏任务

- 事件机制 捕获 冒泡

- WEB 开发 SPA HASH HISTOR等

- 路由

