// node 后端
// node 内置的核心模块
// js 在命令行运行
// js 有两种模块化方案 
// require node 早期模块化commonJS 
// import es6 更先进的模块化方案
// old  module 
// node 受欢迎 中小项目开发 
// 端口 -> 某个服务
// 3306 mysql 服务 进程（资源） 线程（执行）
// domain（localhost） -> ip 地址 (127.0.0.1)
// -> 某台设备-》 port 设备上的某个服务（进程）
// 1234 8080 端口占用了，
// 一台设备上可以很多端口使用，有多个http服务 多个网站
// 不要使用一些特殊端口 
const http = require('http');
const fs = require('fs'); // file system 
const path = require('path'); // 路径模块 
/*
 * 代码解读：
 * 1. 模块引入部分：
 *    - http: 创建web服务器的核心模块
 *    - fs: 用于读取本地文件
 *    - path: 安全地处理文件路径，避免不同操作系统的路径差异问题
 * 
 * 2. 服务器创建部分：
 *    - 使用http.createServer()方法创建服务器实例
 *    - 传入的回调函数会在每次收到请求时执行
 * 
 * 3. 请求处理逻辑：
 *    - 首先检查请求方法和路径，只处理特定的GET请求
 *    - 使用path.join()安全拼接路径，比字符串拼接更可靠
 *    - fs.readFile()异步读取文件内容
 *    - 完善的错误处理：文件读取失败返回500错误
 *    - 成功读取后设置正确的Content-Type并返回文件内容
 * 
 * 4. 注意事项：
 *    - 这是一个基础实现，实际应用中需要考虑更多情况：
 *      * 其他HTTP方法的处理
 *      * 其他URL路径的处理
 *      * 更完善的错误处理
 *      * 静态资源缓存等性能优化
 *    - 目前代码只能处理index.html，实际需要支持多种静态文件
 */
const server = http.createServer((req, res) => {
  // res.end('hello http server');
  // http 基于请求响应的协议 
  // 路由 Method + url 定位了服务器端的资源
  // 为了资源 
  if (req.method == 'GET' && 
    (req.url == '/' || req.url == '/index.html')) {
    // res.end('hello http server');
    console.log(__dirname, 
      path.join(__dirname,'public', 'index.html'));

    fs.readFile(
      path.join(__dirname,'public', 'index.html'), 
      // 异步 callback
      (err, content) => {
        // 前端体验为主
      // 后端稳定为主
      if (err) {
        res.writeHead(500); // 5XX 服务器错误
        res.end('Server error');
        return;
      }
      // 不只是html, css, js, jpg
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content);
    })
  }
  // 后端路由， 暴露资源
  http://localhost:8080/style.css?a=1&b=2
  // 协议 http:// localhost 域名  端口   /style.css path  queryString
  if (req.method == 'GET' && req.url == '/style.css') {
    fs.readFile(
      path.join(__dirname, 'public', 'style.css'),
      (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Server error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.end(content);
      }
    );
    return;
  }

  if (req.method == 'GET' && req.url == '/script.js') {
    fs.readFile(
      path.join(__dirname, 'public', 'script.js'),
      (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Server error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        res.end(content);
      }
    );
    return;
  }

  if (req.method == 'POST' && req.url == '/login'){
    // 用户名和密码的校验
    res.writeHead(200,{
      'Set-Cookie': "user=admin;",
      'Content-Type': 'application/json'
    })
    res.end(

      JSON.stringify({
        success:true,
        msg:'登录成功'
      }
      )
    )
  }

  if (req.method == "GET" && req.url == "/check-login"){
    if(req.headers.cookie == admin){
      res.writeHead(200,{
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({
        isLogin:'ok'
      }))
    }
    else {
      res.writeHead(200,{
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({
        isLogin:'fail'
      }))
    }
    
  }
})
server.listen(8080);