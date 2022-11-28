const express = require('express');

const app = express();


app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器发生了错误'); // 这种情况的话，会造成服务器的崩溃，需要用一个 错误中间件来捕获错误
    res.send('home'); // 只要发生了错误，第9行的代码没有执行，会立即进入到错误中间件里面去
})

// 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => { // 注意：错误中间件有4个参数，缺一不可，顺序也不能乱
    console.log('发生了错误' + err.message);
    res.send('error:' + err.message);
})

app.listen(80, () => {
    console.log('error running at http://127.0.0.1');
})