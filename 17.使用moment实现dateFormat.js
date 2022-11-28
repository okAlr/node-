const moment = require('moment');

const dt = moment().format('YYYY-MM-DD HH:mm:ss');// 都补0
console.log(dt);

const dt1 = moment().format('YYYY-MM-DD HH:m:ss'); // 分钟不补0
console.log(dt1);