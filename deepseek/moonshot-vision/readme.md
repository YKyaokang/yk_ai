月之暗面：
去年爆火，但是很可惜。

# 智能前端之图片识别


- StrictModel react 默认启动的严格模式
  执行一次 测试一次 两次
- 去除后记得删掉引入
  良好的编程风格
  移除不需要的代码 
- import.meta.env.VITE_API_KEY 环境变量对象
  代码运行时可以和环境变量交互
  把env 写到代码里
- async await 
  then
  异步
  流程控制
  await 比 then 更同步化 简单
- 无障碍访问
  label htmlFor + input#id
- preview 本地预览
  - 良好且必须的用户体验，实时的告知用户在发生什么
  - 图片上传及处理挺慢的，所以需要preview 
  - onChange
    1. e.target.files[0]; 拿到图片对象
    2. FileReader 实例
    3. readAsDataURL 方法（创建一个新的格式）  得到base64 数据
    4. 读取之后拿到base64, 可以直接作为img的src中的url

- 静态的html -> 动态模板({data})  -> 状态 State   useState 