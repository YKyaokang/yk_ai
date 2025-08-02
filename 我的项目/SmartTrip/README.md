# 智能云游

## 开发前的准备

### 安装依赖
react-router-dom zustand axios 
@react-vant/icons
react-vant （第三方UI组件库） lib-flexible  适配移动端
**开发期间的依赖**
jwt  vite-plugin-mock 
postcss postcss-pxtorem  
### 配置插件
vite配置
- alias
- mock
### 移动端适配
- main.jsx: import 'lib-flexible' //适配移动端
- index.html: user-scalable=no  禁止用户缩放
- postcss.config.js

### 配置路由
配置完成
目前双布局 分为MainLayout 和 BlankLayout
目前分为五个页面

### 开发首页

# 仿 去哪儿旅行 等旅游网

### 首页 
图片 搜索栏  本地名 南昌 
### 攻略 
（瀑布流实现帖子） 关注 推荐 单页应用SPA
### AI旅行制定师 
单页 工作流 制定旅游计划  智能云游 （结合智能前端 调用工作流API  ）
### 个人主页 
订单 定制 右上角 消息 扫码   登录  发送验证码


## 痛苦点
攻略页面的关注和推荐 路由嵌套路由 会不会影响一些东西
再一次瀑布流 封装 mock等
攻略的样式参考(中间可以加些广告啥的)
安排多一些亮点 瀑布流等
关注功能的 设计 关联后续可能的个人
关注功能的路由保护（设置提示组件）
下拉刷新（难 先不考虑）
## TODO(8.2)

1. 
攻略页面开发
- 瀑布流 SPA


时间多 搜索页面开发
时间多写文章


### day1(8.1)
- 完成了项目初始化，完成了主页布局搭建，
- 技术点：
难点：zustand + 观察者模式 + axios + mock 实现瀑布流 查看效果
css： 基本都是AI写的，gird布局等挺重要的  
AI 生图  学习了阿里的图标库的用法
总结：主页还有一些细节，先不深究实现，等后面几天再搞，包括一些性能优化
先完成再完美
- day1 主页 todo ：帖子的imgCard样式 和 优化ICON的封装化 以及 一大堆的性能优化 特别难得登录

## 项目亮点
