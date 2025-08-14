# 居中
研究对手 
- 听清什么居中
    - 水平垂直
- 方式不是关键，区别和优劣
    - 水平居中 text-align
    - 单行文本垂直居中 padding,line-height = height
    - 固定宽高块级盒子水平垂直居中 absolute + top + left 赋值 
        缺点需要知道盒子的宽高 
    - transform 相对于自身大小的百分比
    
    
    - 知道盒子本身的固定宽高
    1.absolute + margin负值 
    2.absolute + margin auto(重要 一定要设置上下左右为0)
    3.absolute + calc （50% - 本身宽高的一半） 缺点是性能差，很少用
    
    - 不需要知道盒子的宽高
    1.absolute + transform
    line-height + vertical-align 
    writing-mode
