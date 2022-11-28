const path = require('path');
const fs = require('fs');

// ../ 会抵消前面一个的路径
const str = path.join('/a', './d', '../', '/f','/s/d','../../');
console.log(str);

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf-8', function (err, data) {
    console.log(data);
})
