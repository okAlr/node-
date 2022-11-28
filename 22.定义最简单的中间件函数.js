const express = require('express');
const app = express();

// 注意这三个参数缺一不可
// const mw = function (req, res, next) {
//     console.log('这是最简单的中间件');

//     // 在中间件处理完了逻辑之后，一定要调用 next 方法，把流转关系转交给下一个中间件
//     next();
// }

// // 注册为全局生效的中间件
// app.use(mw);

//从 第4行到第13行的 简写 全局中间件的写法
app.use((req, res, next) => {
    console.log('这是最简单的中间件');
    next();
})


app.get('/', (req, res) => {
    res.send('home');
})

app.get('/user', (req, res) => {
    res.send('user');
})



app.listen(80, () => {

})