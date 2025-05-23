# css animation

- html
  div
  眉毛
  嘴巴
  小酒窝
  
- css
  ? 在一起？
  border-radius: 50%;
  animation 世界

- html快捷输入方式
  div#l-ball.ball emmet 语法  css 选择器
- id 唯一 
- class 类名 
- .container?
  盒子 页面居中  
  水平垂直居中
  .container > #l-ball.ball+#r-ball.ball  

- display 属性
  div block
  span i a inline
  display 切换行块级的格式化上下文能力
  inline

- 面向对象的css 
  多态 
  复用 多类名 

- 定位
  - position 定位
    static 没有定位能力
    
    relative 相对定位
      - 子元素相对它定位
      - 相对于自身的位置定位

    absolute 绝对定位
      - 找到离它（管着它的）最近的position 不为static 的元素
      定位 
    absolute 找到离它最近的postion 不为static 的属性定位
    只要父元素没有position 定位，
    绝对定位的元素 会一直找，
    直到body 为止
    .container absolute body