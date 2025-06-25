# 流式输出

- 为什么会考这道题？
  25年大厂必考题
  - LLM 聊天机器人 （23年的AI爆款） =》 24年 推理 =》 25年AI Agent年  AI产品
  - 流式输出属于用户体验，前端职责，

- 为何需要流式输出？
  - 边生成边输出？
    后端、LLM API 的方式提供给我们
    AIGC 生成式的大模型 一个token一个token transform (google)出来的 
    "我是你的assistant," token开销付费的  AIGC：AIGenerticContent 
    更快地看到响应 

- 前端的职责
  - 良好的用户体验
  - 尽快反馈结果
  障眼法   生成需要花时间，我愿意等
  最懂用户心理 
  
- 步骤：
  - 前端能实现流式输出?
    setInterval  异步 事件机制 message 
    
  - 后端又怎么实现？
    socket 长链接
    http请求是基于请求响应式简单协议 关闭连接
    http 2.0 server push 服务器端推送。

## 全栈能力
- npm init -y   node 后端
- npm i express 老牌的node 框架