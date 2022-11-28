const express = require('express');
const app = express();

const qs = require('querystring');



// 这是自定义的解析表单数据的中间件
app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑

    // str 用来存储客户端发送过来的请求体数据
    let str = '';

    // 监听 req 的data 事件
    // 因为数据量比较大的话，无法一次性发送完毕，则客户端会把数据切割后，分批发送到
    // 服务器，所以 data 事件可能会触发多次，每一次触发 data 事件时，获得的数据只是
    // 其中的一部分，需要我们手动进行拼接
    req.on('data', chunk => {
        str += chunk;
    })


    // 监听 req.end 事件
    req.on('end', () => {
        // 此时 str 中存放的是完整的请求体数据
        console.log(str);

        // 把字符串格式的请求体数据，解析为对象格式
        const body = qs.parse(str);
        // console.log(body);

        req.body = body;

        // 记得不要忘了要调用 next方法
        next();
    })
})


app.post('/user', (req, res) => {
    // console.log(req.body);
    res.send(req.body);
})

app.listen(80, () => {

})