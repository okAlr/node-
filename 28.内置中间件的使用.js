const express = require('express');
const app = express();

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json());


// 通过 express.urlencoded() 中间件，来解析表单中的 url-lencode格式的数据
app.use(express.urlencoded({ extended: false }));


app.post('/user', (req, res) => {
    // 在服务端，可以使用 req.body 这个属性来接受客户端发送过来的请求体数据
    // 在默认情况下，如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
    // 所以需要在路由之前配置解析的 中间件
    console.log(req.body);

    res.send('ok');
})

app.post('/book', (req, res) => {
    //在服务端，可以使用 req.body 这个属性来接受客户端发送过来的请求体数据，包括 JSON格式和 urlencode 格式的数据
    console.log(req.body);

    res.send('ok book');
})


app.listen(80, function () {
    console.log('http://127.0.0.1');
})