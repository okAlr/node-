const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端发送的 查询的参数
    const query = req.query;

    res.send({
        status: 0, // 0表示处理成功，1表示处理失败
        msg: 'get请求成功', // 状态描述
        data: query // 响应的数据
    })

})


router.post('/add', (req, res) => {
    const body = req.body;
    res.send({
        status: 0,
        msg: 'post 请求成功',
        data: body
    })
})

module.exports = router;