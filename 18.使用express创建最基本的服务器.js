const express = require('express');

// 创建 web服务器
const app = express();

// 监听客户端的get和post请求，并向客户端响应具体内容
app.get('/user', (req, res) => {
    // 响应内容
    res.send({ name: 123 })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})


app.get('/', (req, res) => {
    // 通过 req.query 可以获取到客户端发送过来的 查询参数(就是 ？后面的参数)
    // 注意：默认情况下，req.query 是一个空对象
    console.log(req.query);

    res.send(req.query);

})


// :id 是动态参数,（可以有多个动态参数）
app.get('/user/:id/:name', (req, res) => {
    //req.params是动态匹配到的 url 参数，默认也是一个空对象
    // 注意： 上面的 :id 的这个id是可以任何字符的，可以修改的
    res.send(req.params);
})




// 启动 web 服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
})