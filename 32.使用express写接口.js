const express = require('express');
const app = express();


// 配置中间件
app.use(express.urlencoded({ extended: false }));



// 若要同时使用cors和jsonp，必须在配置 cors 中间件之前，配置 jsnp 的接口
// 不然后续所有接口都会被处理成 cors 接口
app.get('/api/jsonp', (req, res) => {
    // 定义 jsonp 接口具体的实现过程

    // 1. 得到客户端发送过来的回调函数的名称
    const funcName = req.query.callback;

    // 2. 得到要通过JSONP 形式发送给客户端的数据
    const data = { name: 'abby', age: 18 };

    // 3. 根据前两步得到的数据，拼接出一个函数调用的字符串
    const str = `${funcName}(${JSON.stringify(data)})`;

    // 4. 把字符串响应给客户端的 script 标签进行解析执行
    res.send(str);


})


// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors');
app.use(cors());


const router = require('./32-1.apiRouter');
app.use('/api', router);


app.listen(80, () => {

})




