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
})