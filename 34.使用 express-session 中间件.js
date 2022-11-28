const express = require('express');

const app = express();

const session = require('express-session');
app.use(session({
    secret: 'mysession', // secret 属性的值可以是任意字符串
    resave: false, // 固定写法
    saveUninitialized: true // 固定写法
}))

// 托管静态页面
app.use(express.static('./files/pages'));
// 解析 post 提交过来的数据
app.use(express.urlencoded({ extended: false }));


// 登陆的接口
app.post('/api/login', (req, res) => {
    // 判断用户提交的登陆信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000') {
        return res.send({ status: 1, msg: '登陆失败' });
    }

    // 将登陆后的用户信息保存到 session 中
    // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来session这个属性
    req.session.user = req.body;
    req.session.islogin = true;


    res.send({ status: 0, msg: '登陆成功' });
})


// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: 'fali' });
    }

    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    })
})


// 退出登陆的接口
app.post('/api/logout', (req, res) => {
    // 清空 当前客户端对应的 session 信息
    req.session.destroy();
    res.send({
        status: 0,
        msg: '退出登陆成功'
    })
})


// 还有 html 文件没有写，看是咋个操作的

app.listen(80, () => {

})