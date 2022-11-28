const express = require('express');
const app = express();

// 使用 express.static 方法，快速的对外提供静态资源
// 参数是 文件夹的路径
app.use(express.static('./files/source'));

// 若要托管多个静态目录，多次调用 express.static 方法就可以
// app.use(express.static('./files/source'));
// 注意：访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找请求的文件


//  前面加了这个 /clock 参数后，就说明要访问这个文件夹下面的资源的话，访问路径上要加上 /clock 
app.use('/clock',express.static('./files/clock'))


app.listen(80, () => {
    console.log('http://127.0.0.1');
})

