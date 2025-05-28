# 微信当家框架WEUI 
### BEM 国际命名规范
- 项目 .weui-page 
    - botton 页面 

- Block 概念
    一块内容 项目代号 风格+ 可复用的代码 
    项目代号 + 区块的作用或职责 page
    .weui-page
    .tm-page
- Element 概念
    元素  __header
        块__
    同一块中概念不重叠则不重复 (仍然使用__即可)
    .weui-page__title
    .weui-page__desc
- UI 框架中button，input,cell,通用的**组件**
    重启BEM 命名
    .weui-btn **复用**
    业务代码?
    大厂，
    基础架构代码  学习WEUI 的源码 

    几个block组合起来 ，页面就出来，组件式开发
- Modifier
    状态 
    Element/Block_primary
    Element/Block_default
- BEM 规范让我们一起大厂协作
    - 页面由blocks构成 .weui-{block}
    - block 包含 elements .weui-{block}__{element}
    - element 会有些状态 
        .weui-{block}__{element}_{modifier}

    - 当开发例如button这类可以复用的组件时，需要单独使用block 而不是使用element 这样子能够使得我们更好地进行复用