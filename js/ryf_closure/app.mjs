// es6 的模块化 module
// mjs 后缀使用es6模块化
// 现代模块系统
// node 受欢迎  默认不支持es6 模块化
// node 最新版本支持了 22
// node 准备跟require commonjs say goodbye

//es6 module 更先进 mjs 
import http from 'http';
const fs = require('fs'); // file system 
const path = require('path') // 路径模块

const server = http.createServer((req, res) => {
  res.end('hello http server');
  // http 基于请求响应的协议 
  if(req.method == 'GET' && req.url == '/'){
    fs.readFile(path.join(__dirname,'public','index.html'),(err,content) =>{
      if(err) {
        res.writeHead(500); //5xx 服务器错误
        res.end('Server error');
        return; 
      }
    })
  }
})
server.listen(1234);