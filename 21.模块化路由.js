const express = require('express');
const app = express();

// 导入路由模块
const router = require('./21-1.模块化路由-router');

// 注册路由模块，并加一个统一的路径前缀
app.use('/api',router);

// 注意：app.use() 函数的作用，就是来注册全局中间件


app.listen(80, () => {
    console.log('http://127.0.0.1');
})