const express = require('express');
const app = express();

const bodyParser = require('./31-1.custom-body-parser');

app.use(bodyParser);


app.post('/user', (req, res) => {
    // console.log(req.body);
    res.send(req.body);
})

app.listen(80, () => {

})