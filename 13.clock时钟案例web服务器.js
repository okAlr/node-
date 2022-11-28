const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;
    console.log(url);

    // 将客户端请求的url 地址映射为具体文件的路径
    // const fpath = path.join(__dirname,'files/', url);

    // 优化资源路径
    let fpath = '';
    if (url === '/') {
        fpath = path.join(__dirname, 'files/clock/index.html');
    } else {
        fpath = path.join(__dirname, 'files/clock', url);
    }




    // 根据映射过来的文件路径读取文件内容
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            return console.log('404 Not Found');
        }

        res.end(dataStr);
    })

})


server.listen(80, () => {
    console.log('访问 http://127.0.0.1');
})