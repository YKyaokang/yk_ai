const http = require('http');
const fs = require('fs');
const path = require('path'); 
const server = http.createServer((req, res) => {
  if (req.method == 'GET' && 
    (req.url == '/' || req.url == '/index.html')) {
    fs.readFile(//传递两个参数 路径，和回调函数
      path.join(__dirname,'public', 'index.html'), 
      (err, content) => {
      if (err) {
        res.writeHead(500); // 5XX 服务器错误
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content);
    })
  }

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
    
    res.writeHead(200,{
      'Set-Cookie': "user=admin",
      'Content-Type': 'application/json'
    })
    res.end(
      JSON.stringify({
        success:true,
        msg:'登录成功'
      })
    )
  }

  if (req.method == "GET" && req.url == "/check-login"){
    const cookies = Object.fromEntries(req.headers.cookie?.split(';').map(c => c.trim().split('=')) || []);
    if(cookies.user === 'admin'){
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