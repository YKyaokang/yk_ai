const http = require('http')
const fs = require('fs');
 
http.createServer(function(req,res){
    if (req.url === '/') {
        // index.html
        // async 异步 sync 同步
        // fs.readFile('./index.html', 'utf-8', function(err, data){

        // })
        // 性能差点
        const html = fs.readFileSync('./test.html', 'utf-8');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(html)
        
    }
    if (req.url === '/script.js') {
        res.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Expires': new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });
        const script = fs.readFileSync('script.js','utf-8');
        res.end(script);
    }
})
.listen(1234)
