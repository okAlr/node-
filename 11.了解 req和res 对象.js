const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    // req 是请求对象，包含了与客户端相关的数据和属性
    // req.url 是客户端请求的 url 地址
    // req.method 是客户端请求的 method 类型
    const url = req.url;
    const method = req.method;

    const str = `请求地址是${url},请求方法是 ${method}`;

    // 解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')


    // res 是响应对象，她包含了与服务器相关的数据和属性
    // res.end 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str);
})

server.listen(80, () => {
    console.log('访问 http://127.0.0.1');
})