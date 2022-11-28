const express = require('express');
const app = express();

const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件1');
    next();
}

const mw2 = (req, res, next) => {
    console.log('调用了局部生效的中间件2');
    next();
}

// 注意这个参数的位置：表示 mw1 中间件只在 这一个路由会生效,方法1
app.get('/', mw1, mw2,(req, res) => {
    res.send('home')
})
// 方法2
app.get('/', [mw1, mw2],(req, res) => {
    res.send('home')
})

app.get('/user', (req, res) => {
    res.send('user');
})

app.listen(80, () => {

})