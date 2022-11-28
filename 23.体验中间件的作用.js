const express = require('express');
const app = express();

app.use((req, res, next) => {
    // 获取到请求到达服务器的时间
    const time = Date.now();

    // 为 req 对象，挂载自定义属性，从而把时间共享给后面所有的中间件和路由
    req.startTime = time;
    next();

})


app.get('/', (req, res) => {
    res.send('home'+req.startTime);
})

app.get('/user', (req, res) => {
    res.send('user'+req.startTime);
})



app.listen(80, () => {

})