# react 业务
friends 数据
App
挂载点
页面的显示
- 原生JS
  DOM 编程
  底层API 不够高效
  聚焦于业务
  前端切图仔(html,css + 一点js) -》 前端开发工程师 (微博，美团) JS框架（vue/react）
  框架(vue/react) -> node 全栈开发 （node + 数据库） -> react native Android ios App -> AIGC AI应用 -》 全干工程师 
  Web 应用 (www.baidu.com)  移动应用（React Native）
  Node (serer)  AI 统领一切 JS AI全干工程师 
# 项目的创建
- npm 是什么？ node package manager 
  node 包管理器 安装react  package App开发能力
- npm init vite
  按vite 模板初始化项目下 init 
  vite vue/ract 项目模板和**工程**化
- 选择一些配置
  - react
  - js 
  项目模板，基于它开始开发
- npm install 安装依赖(项目核心 从第三方 安装到 本地项目之中)
  node_modules 依赖包所在
- npm run dev 启动项目
  3000 端口启动引用

# 5 W
- what Web App
- how npm init vite 初始化并vite的项目模板
- 安装依赖 
- 启动应用 http 5173 react 技术栈 Web App
原理JS API 编程，面向业务  

## 响应式业务


## TODOS 任务列表
  - 数据 ['脱单','学习','健身']
   数据在页面上渲染 react 提供点啥 支持这个业务
   
## react 初体验
- react 组件是完成开发任务的最小单元
- 组件组合html,css,js 
- 组件就是一个函数
- 返回html 
- 函数体里面 return 之前可以申明数据和业务逻辑
- {} js 表达式 不用写DOM API

## 响应式数据
- 数据会发生改变的，数据状态 state
- useState() 使用一个数据状态
- [todo,setTodos] = userState(初始值) 使用一个数据状态,返回一个数组
  数组第一项 数据项
  数组第二项 修改数据的方法
  

## React 组件化

- vite 何为？ 
      vite 工程化套件  塔吊、搅拌机
- npm 包管理
      - 模板代码
      - 跑起来

- 何为组件
      - 组件是完成开发任务的最小单元
      组合html,css,js 的开发单元
      App.jsx 根组件
      - 标签力度太细，只是工作的一个环节，不利于表达业务单元的抽象。
      - todoList 组件
      - 工作单位
      - 功能单位
- 重点：组件如何划分？ TodoList 为例
- 函数就是组件
      - return html  完成了模板 { 数据 }
      - return 之前 js 逻辑 数据...
      - 复用
      - 以html标签的形式，插入值
- 会写组件，会拆分组件，写数据状态业务 写一个前端项目了



## 开发目录
    - todoList 项目目录
    - src 开发目录
         - App.jsx 根组件
         - 组件放在components 目录下
         - css 放在src下
             相对路径
## 模块化
    - 大型多人协作的项目
    - 模块化文件分离
        - 函数 
        - 类
        - 文件分离  一个文件 一个模块（一个文件只做一件事）(类、函数、组件)
        语法如下：
        - import XX from '../xxx'
        - export default XXX;

## 组件化原理
- 现代前端开发框架的核心思想
- 低级的DOM树编程 -》 组件树编程
- 开发的最小单元
    - html 只是沙子

## React 界面开发业务
- 现在界面业务的构成
    - html 模板
    - 数据驱动的 { 模板区域 数据绑定业务}   
    - 数据状态的改变 useState()
    - 显示和更新 由数据状态决定
    - react 聚集于业务，而不是DOM API
    - 数据什么？ todos 
    - 在哪里用？ { } 里面就能显示出来
    - 合格的前端 会组件化 会响应式数据状态
    