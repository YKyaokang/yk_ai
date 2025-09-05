# 虚拟列表

- 一次性给你10万条数据插入页面（JS插入操作），你会怎么做
    - 时间分片（RequestAnimation 或者 setTimeout 微任务宏任务配合）
    - 虚拟列表（类似于懒加载）
        没有必要，只需要加载视窗？
        #container 高度的, scroll 
        offsetTop 偏移量 transform translateY
        index start -> end 20
        item height 
- eventLoop 
    - JS单线程的开销肯定很大 页面的卡顿
    - 页面渲染开销也大
    
计算可见区域 - 根据滚动位置确定哪些项应该显示
渲染可见项 - 只渲染当前可见的项，而非全部数据
使用占位元素 - 用不可见元素保持滚动条的正确尺寸
动态加载 - 根据需要动态加载和卸载列表项

