const express = require('express');
const app = express();

// 第一个全局中间件
app.use((req, res, next) => {
    console.log('第一个全局中间件');
    next();
})
// 第二个全局中间件
app.use((req, res, next) => {
    console.log('第二个全局中间件');
    next();
})

app.get('/', (req, res) => {
    res.send('home')
})

app.listen(80, () => {

})