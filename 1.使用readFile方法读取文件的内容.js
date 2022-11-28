// 导入 fs 模块，来操作文件
const fs = require('fs');

/***
 * 调用 fs.readFile() 方法来读取文件
 *      参数1:读取文件的路径
 *      参数2:读取文件时候采用的编码格式，一般默认指定是 utf-8
 *      参数3:回调函数，拿到读取失败和成功的结果 err dataStr
 *      
 */
fs.readFile('files/1.txt', 'utf8', function (err, dataStr) {
    // 若读取成功，则 err的值为 null
    // 若失败，则err的值是 错误对象，dataStr 的值为 undefined

    if(err){
        console.log('读取失败：',err.message);
    }

    console.log('读取成功：',dataStr);
})