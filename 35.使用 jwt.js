const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');


const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// 定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = 'Abby is the best and the winner';


// unless({ path: [^/\/api\//]}) 用来指定接口不需要访问权限
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))



// 登陆接口
app.post('/api/login', (req, res) => {
    const userInfo = req.body;
    // 登陆失败
    if (userInfo.username !== 'admin' || userInfo.password !== '000') {
        return res.send({
            status: 400,
            message: '登陆失败'
        })
    }

    // 登陆成功
    // 调用 jwt.sign 方法生产 jwt 字符串，并通过 token 属性发送给客户端
    // jwt.sign() 有三个参数，参数1:用户的信息对象，参数2:加密的密钥，
    // 参数3:配置对象，可以配置当前的token的有效期
    // 记住：千万不要把密码加密到 token 字符中
    const tokenStr = jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: '30s' });

    res.send({
        status: 200,
        message: '登陆成功',
        token: tokenStr
    })
})

// 这是一个有权限的接口
app.get('/admin/getinfo', (req, res) => {
    // 使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
    console.log(req.user);

    res.send({
        status: 200,
        message: '获取用户信息成功',
        data: req.user
    })
})


// 声明一个全局处理错误的中间件，捕获解析 jwt 失败后产生的错误
app.use((err, req, res, next) => {
    // 这次错误是由 token 解析失败导致的
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 404,
            message: '无效的 token'
        })
    }

    res.send({
        status: 500,
        message: '未知的错误'
    })
})


app.listen(80, () => {
    console.log("http://127.0.0.1");
})