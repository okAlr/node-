// 这是路由模块
const express = require('express');

// 创建路由对象
const router = express.Router();

// 挂载具体的路由
router.get('/user/list', (req, res) => {
    res.send('get')
})

router.post('/user/add', (req, res) => {
    res.send('add post');
})

// 向外导出路由
module.exports = router;