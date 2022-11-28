const fs = require('fs');

/***
 * writeFile() 方法，写入文件内容：
 *      参数1: 表示文件的路径
 *      参数2: 写入文件的内容
 *      参数3: 回调函数
 * 
 * 写入成功，则 err 的值 为null
 * 写入失败，则 err的值等于一个错误对象
 */

fs.writeFile('./files/2.txt', 'Everything will be better! just devote to study', function (err) {
    if (err) {
        return console.log('文件写入失败：', err.message);
    }
    console.log('写入成功！');
})