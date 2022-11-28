// 导入模块
const http = require('http');

// 创建 web 服务器实例
const server = http.createServer();

// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
    console.log('someone visit our server');
})

// 启动服务器
server.listen(8080, function () {
    console.log('server is running at http://127.0.0.1:8080');
})