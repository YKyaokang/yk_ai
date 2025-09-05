# next.js 全栈项目

- users & posts 
- jwt 双token 鉴权
- 虚拟列表 
    AI 爬虫 掘金100条数据
- 大文件上传
- ai 工程化
    流式输出
    function Tool
    mcp
- ai 搜索


## 开发流程
- .env 
    mysql url 
    create database demo；建立数据库
- prisma 初始化  
    orm工具
    object relation mapping
    User(表) => User类
    一行  =>  new User() 实例          
    底层数据库操作 映射成为 高级的面向对象操作 
- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，用于生成类型安全的数据库客户端。
    数据库的模拟图
    navicat 好的地方，schema + git 留下数据库设计和修改的历史
    文档型的，可以追踪。留底

- Model 表的映射模型
    @@map("users") 指定模型对应的表名
    post Post[] 一对多的关系
    createAt updateAt primsa 自动维护
    @id 主键
    Model User {
        columns name type @default
        索引
        relation
    }

- migration 迁移
    记录 

- restful API
- lib/ 复用的js 模块

## 大文件上传
当文件比较大的时候，由于各种原因，容易失败，而且上传速慢，一旦失败，需要重新上传，会让用户沮丧

采用分片上传策略（并发，并发限流（规定数量的Promise）），将文件切分为多个小块，并行上传，提升稳定性和效率。上传前通过Web Worker 计算文件整体以及分片的hash，向服务器校验，若文件已存在则直接妙传。前端记录上传进度和已成功分片，支持断点续传，避免重复上传，服务器按序接收分片，存储后进行合并，并检验最终文件的完整性，结合唯一标志和分片索引，确保确保上传可靠。整个过程配合进度条和错误充实机制，提升用户体验与系统健壮性。

- worker hash计算
- 性能优化 
    上传文件的处理函数 handleFile 使用useCallback 缓存 避免重复创建
- typescript 的 使用
    - 主线程和worker 线程间的通信，数据约定
    - HashWorkerIn
    - HashWorkerOut 
    as 断言 可以使用!. 非空断言

- useRef的高级使用场景
    可变对象
    - DOM对象
    - 对象
    - 值
    AbortController 取消请求对象，推迟到上传再实例化
    暂停的值也用 ref 保存


- es6 的特性
    - Set 已经上传的分片的索引
    - ?? 空值合并运算符
    - Promise.all 并发

## 项目的难点
- 分片上传的并发控制
    Promise.all + 递归 
    并发限流的核心是：一开始只启动不超过 MAX_CONCURRENCY 个工人函数，每个工人执行完一个任务后会递归调用 next()，继续从队列取下一个任务，从而保证始终只有固定数量的工人在运行。这样既避免了同时创建过多 Promise 占用资源，又能充分利用并行度；等所有工人都把队列清空才 resolve，Promise.all 就能精确等待整个批次完成。

- restful api
    - uploadChunk POST /api/upload/chunk url 设计
    - 自定义请求头:这里的 headers 通过自定义请求头传递元数据（文件哈希、分片序号），使服务端能在不解析请求体的情况下快速识别分片归属和顺序，提升处理效率和可扩展性。
    只解析请求头 就可以判断 是否已上传的chunk 更快 



