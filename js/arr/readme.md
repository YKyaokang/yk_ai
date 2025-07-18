# Array 高效考点?

- 怎么认识数组
    - 可遍历的对象
- new Array(5) 
    类似于c++，固定大小的分配 v8 引擎对arr 设计
    - 灵活地扩展，不限类型，还有hash的特性
    - empty*5 key 没有释放 for key in 不可以迭代
申明数组的方法
- [] 数组字面量  
    ["1","2","3","4",...arr]
- new Array(5).fill(undefined) 统一
- 静态方法 Array.of / Array.from（转换类数组，填充计算） 