const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {

    // 设置默认的响应内容为 404
    let contect = '<h1>这是 404 </h1>';

    if (req.url === '/' || req.url === '/index.html') {
        contect = '<h1>这是 index.html </h1>';
    } else if (req.url === '/about.html') {
        contect = '<h1>这是 about.html </h1>';
    }

    // 防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    res.end(contect);
})

server.listen(80, () => {
    console.log('访问 http://127.0.0.1');
})