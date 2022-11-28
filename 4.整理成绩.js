const fs = require('fs');

fs.readFile('./files/3.score.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(err.message);
    }

    let arr = dataStr.split(' ');
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element.replace('=', '：'));
    });

    // console.log(newArr.join('\n'));

    fs.writeFile('./files/4.ok.js', newArr.join('\n'), function (err) {
        if (err) {
            return console.log('写入失败', err.message);
        }
        console.log('成绩写入成功');
    })
})