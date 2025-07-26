# React复习

## 三架马车

1.组件式开发 最小单位是组件
页面 由组件构成
组件渲染 memo的使用 
将组件的区分变细，不要都写在一个内容上


2.状态管理：从最开始的useContext ＋ Reducer 到 如今的zustand 
为了： 
- 优化性能 
- 方便表达
- 管理全局

2.1单向数据流
props 自定义事件 私有状态 等
向上报告

3.路由：
路由的基本使用Router
路由的存放位置 一般来说放在最外层，可以放在单独的文件夹中
SPA单页应用等


## 使用Mock
Mock 现代前端开发必备的接口/数据 模拟的方法

### Mock的使用
安装插件
在文件夹下配置Mock
使用apifox测试

配合开发中的api文件夹 测试

### 开发中的api文件夹
存放config.js放一些baseUrl配置文件 导出axios
存放具体的发送请求的方法 例如repos.js



## 其它细节

### useLayoutEffect的使用
  结合useEffect 解决白屏问题

### css模块化 
使用[name].module.css的命名方式 导入的时候使用{styles.button}这种方式
- 提到 这样子会使得可读性差？ No 我们最终打包的可读性 影响无所谓 只要开发阶段的可读性得到保证就行

### framer Motion
注意使用方法

### forwardRef
由于不能直接向props传递ref 我们需要使用forwardRef帮我们实现
使用方法 得到一个高阶函数
使得父组件能够操控子组件的ref

### 受控组件和非受控组件
注意区分概念：
- 受控组件的input是绑定了state，每次输入时需要onChange绑定setState
  它的特点：实时性，适合处理一些需要实时监控的数据
- 非受控组件 使用ref 绑定input 不会绑定state 
  它的特点：input 的提交 单独处理

### 高阶组件的概念（HOC）
- 封装过后的组件称为高阶组件 它会支持一些高级的功能

### Babel && JSX背后的原理
JSX不能独立运行，它需要在React的环境下 使用Babel编译后才能运行
通常会编译成`React.createElement()`这种形式


### 为什么key需要唯一值
提到diff 算法：为了优化性能 会比对DOM的变化情况，
基于索引 不推荐！
所以需要设置一个key

## fragment
项目中要安排fragment key 功能

## History 与 Hash
实际上React的路由是基于History的
History 早期设计为页面前进/后退/浏览历史
History 在HTML5之后 提供了pushState、popState、replace方法，这些方法也就是React路由实现的基石

Hash
原本是基于锚点的
- 基于Hashchange 实现 SPA
React路由也能实现Hash方式的Router（但这种方式不太推荐）




