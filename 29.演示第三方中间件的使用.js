const express = require('express');
const app = express();

// 配置第三方的中间件
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: false }));


app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('ok');
})

app.listen(80, () => {

})