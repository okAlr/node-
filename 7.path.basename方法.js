const path = require('path');

let str = '/a/b/c/index.html';
const fullName = path.basename(str);
console.log(fullName);

const fullname = path.basename(str, '.html');
console.log(fullname);