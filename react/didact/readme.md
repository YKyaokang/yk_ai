# 手写React
-> render 生成真正的DOM

- babel 将JSX 转译为 React.createElement
    给响应的参数，生成VDOM
    @babel/preset-react pragma 编译后的函数名

## Didact 运行的入口
- babel 将JSX 转译成React.createElement方法调用，
    给响应的参数，生成VDOM
    @babel/preset-react pragma 编译后的函数名
    pragma JSX 不是react 的专属，vue中也可以用jsx

总结：pragma 让你可以自定义 JSX 的转换目标，不局限于 React，可以用于任何支持类似 API 的库或框架！

## createElement

- App.jsx -> babel -> Dideact.createElement(tag,props,...children)
    返回的结果 VDOM
    由Vnode 结点组成的VDOM树，每个节点包含type,props
    两个属性，props.children 是子结点，也是一个对象

React.createElement 返回的 Element 就是一个描述“要在页面上渲染什么”的普通 JavaScript 对象（即虚拟 DOM 节点），它包含 type、props 等属性，是 React 用来对比变化并高效更新真实 DOM 的虚拟表示。

- createTextElement 这么复杂？
    type 没有的
    Children 没有的
    统一，执行render

## 目前完成
- React is a namespace
- The createElement Function（工厂模式）
- The render Funciton
