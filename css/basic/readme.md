# css 基础

- 一个属性与值的键值对称为申明 declaration
- 一个申明块 {} 中可以有多个申明
- 选择器 申明块作用的选择器选择的对应元素
- ruleset 多个 
- css 层叠样式表

## css 选择器
+ 相临兄弟选择器 紧挨着的后一个元素
~ 通用兄弟选择器，选后续同级元素
> x子选择器，选择**直接**子元素


伪类选择器 某一种状态
伪类选择器是CSS中用于定义元素特殊状态的选择器

// 序号
结构伪类
.container p:nth-child(3) {

}

.container 里面的第三个p元素