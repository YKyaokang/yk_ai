一、JavaScript 知识模块
1. 基础核心
变量提升、暂时性死区（TDZ）

作用域与作用域链（全局/函数/块级）

闭包（定义、应用场景、内存泄漏）

this 指向（默认绑定、隐式绑定、显式绑定、new 绑定）

原型与原型链（prototype、__proto__、继承实现）

2. ES6+ 新特性
let/const vs var

箭头函数（特性、this 问题）

解构赋值、模板字符串

Promise（手写实现、all/race/allSettled）

async/await（原理、错误处理）

模块化（ES Module vs CommonJS）

Symbol、Map/Set、WeakMap/WeakSet

3. 异步编程
事件循环（Event Loop）、宏任务与微任务

setTimeout、Promise、requestAnimationFrame 执行顺序

手写 Promise、Promise.all、Promise.race

4. 函数与对象
高阶函数（map/filter/reduce）

柯里化、防抖（debounce）与节流（throttle）

深拷贝 vs 浅拷贝（实现方式）

对象属性描述符（getter/setter、enumerable）

5. 其他高频
类型判断（typeof、instanceof、Object.prototype.toString）

事件机制（事件冒泡、捕获、代理）

模块化规范（CommonJS、ESM、AMD）

二、CSS 知识模块
1. 布局
盒模型（标准 vs IE）

浮动与清除浮动（BFC 触发条件）

Flex 布局（主轴/交叉轴、flex-grow/shrink）

Grid 布局（基本属性）

响应式布局（媒体查询、rem/vw）

2. 定位与层叠
position 属性（static/relative/absolute/fixed/sticky）

z-index 与层叠上下文

3. 动画与性能
transition 与 animation 区别

硬件加速（transform、will-change）

重绘（Repaint）与回流（Reflow）优化

4. CSS3 新特性
变量（CSS Custom Properties）

伪类/伪元素（:hover、::before）

filter、blend-mode

三、React 知识模块
1. 核心概念
虚拟 DOM（Virtual DOM）、Diff 算法

JSX 本质（编译后代码）

组件生命周期（类组件 vs 函数组件 + useEffect）

2. Hooks
useState、useEffect（依赖项、清理函数）

useCallback、useMemo（性能优化）

useRef（访问 DOM 或保存可变值）

自定义 Hooks 实现（如 useFetch）

3. 状态管理
Context API 使用场景

Redux 核心概念（store/reducer/action）

中间件（redux-thunk、redux-saga）

4. 性能优化
React.memo、PureComponent

懒加载（React.lazy + Suspense）

避免不必要的渲染（shouldComponentUpdate）

5. 进阶
Fiber 架构原理（时间切片、可中断渲染）

服务端渲染（SSR）与 Next.js

错误边界（Error Boundaries）