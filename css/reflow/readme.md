# 回流重绘
- 布局的难点 列式布局和BFC/FFC
  - html 根元素 最外层的第一个BFC元素
    Block Formatting Context  块级从上到下，行内从左到右，BFC 格式化上下文
    有了文档流 
  - float overflow:hidden flex 
  - 有没有什么标签 可以做列式布局 table 

  - 为什么不用？
    - 触发太多回流和重绘
    - 语义不和 table数据表
    tr td
    - 不够灵活      
## 回流和重绘
    - 回流（重排） reflow
    - 当RenderTree 中部分或全部元素尺寸，结构、或某些属性的发生改变时，浏览器重新渲染部分或全部文档的过程叫回流
    table 不适合，table中局部的改变，会触发整个table的回流重排
    火烧赤壁 
    display:none 不参与回流重绘 性能优化的一种方案
    - 触发回流的方式
     1. 首次渲染 严格意义不是， 0=》 有 最耗时 页面每慢0.1s
     少1000万收入
     2. 浏览器窗口的大小改变
     3. 元素尺寸或位置发生改变（transition,transform/opacity 新图层的除外）
     4. 元素内容的变化
        appendChild removeChild 
     5. display:none block 
     6. 字体大小的变化
     7. 激活css伪类 :hover
       color: ? 浏览器需要重新计算元素的样式和布局
     8. 查询某些属性或调用某些方法时
       - getBoundingClientRect()
       ret {
        
       } 
    - 重绘 repaint
    当元素元素样式改变并不影响他在文档流中的位置时
    color background-color visibility show

## 页面时怎么渲染的？
- url
- 下载html
  - 下载字节
  - html 字符 charset utf-8 编码
  - 解析html 开关标签 属性
  - 节点对象(token)
  - 构建DOM树

- link css 下载css
    - 下载字节 Content-Type text/html text/css
    - 编码 utf-8 得到 css文本
    - token化 词法分析
    - css rule节点
    - cssOM树

cssOM树 和 DOM树合体
渲染树结合Layout树
  布局 盒模型 大小
  
- 图层
  - z-index
  - position:fixed 弹窗
  - transtion + transform / opacity
  -animation
  - translate(50%,50%,50%).
  1个涂层 主要文档流图层= DOM + CSSDOM-> RenderTree <-> LayoutTree
  2个涂层 = DOM + CSSDOM-> RenderTree <-> LayoutTree
  ...
- 图层的合并
- 浏览器的渲染引擎 绘制平面 像素点绘制

  
 
