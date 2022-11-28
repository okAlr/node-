// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 原因：代码在运行的时候，readFile 函数 会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径


// __dirname 表示当前文件所处的目录
// console.log(__dirname);

const fs = require('fs');
fs.readFile(__dirname + '/files/4.ok.js', 'utf-8', function (err, dataStr) {
    console.log(dataStr);
})