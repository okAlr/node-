// 1.导入 mysql 模块
const mysql = require('mysql');

// 2. 建立与 mysql 数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的 ip 地址
    user: 'root',//登陆数据库的账号
    password: 'admin123',//登陆数据库的密码,
    database: 'my_db_01' // 指定要操作哪个数据库
})

// 测试 mysql 模块能否正常工作
// db.query('select 1', (err, results) => {
//     // mysql 模块工作期间报错了
//     if (err) return console.log(err.message);

//     // 能够成功的执行 sql 语句
//     console.log(results);
// })



// 查询 users 表中所有的数据
// 如果执行的是 select 查询语句，则执行的结果是数组
// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, results) => {
//     if (err) return console.log(err.message);
//     console.log(results);
// })




// 插入数据的一种方式
// 向 users 表中，新增一条数据，其中 username 的值为 spider-man，passwaord的值是 pcc
// const user = { username: 'spiderman', password: 'pcc123' };
// // 定义待执行的 sql 语句, 可以使用 ？ 来做占位符
// const sqlStr1 = 'insert into users (username,password) values (?,?)';

// // 使用数组的形式，依次为 ？ 占位符具体的值
// db.query(sqlStr1, [user.username, user.password], (err, results) => {
//     // 执行 sql 语句失败了
//     if (err) return console.log(err.message);

//     // 注意：如果执行的是 insert 语句，则返回的是一个对象，里面的 affectedRows 表示插入是否成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })



// 插入数据的简便方式
// const user = { username: 'spide3rman', password: 'pcc1243' };
// // 定义待执行的 sql 语句, 可以使用 ？ 来做占位符
// const sqlStr2 = 'insert into users set ?';

// // 使用数组的形式，依次为 ？ 占位符具体的值
// db.query(sqlStr2, user, (err, results) => {
//     // 执行 sql 语句失败了
//     if (err) return console.log(err.message);

//     // 注意：如果执行的是 insert 语句，则返回的是一个对象，里面的 affectedRows 表示插入是否成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })


// // 更新数据
// const user = { id: 28, username: 'spide4rman', password: 'pcc21243' };
// // 定义待执行的 sql 语句, 可以使用 ？ 来做占位符
// const sqlStr2 = 'update users set username=?,password=? where id=?';

// // 使用数组的形式，依次为 ？ 占位符具体的值ƒ
// db.query(sqlStr2, [user.username,user.password,user.id], (err, results) => {
//     // 执行 sql 语句失败了
//     if (err) return console.log(err.message);

//     // 注意：如果执行的是 update 语句，则返回的是一个对象，里面的 affectedRows 表示插入是否成功
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功');
//     }
// })


// 更新数据的简化
// const user = { id: 28, username: 'spide4rman', password: 'pcc21243' };
// // 定义待执行的 sql 语句, 可以使用 ？ 来做占位符
// const sqlStr2 = 'update users set ? where id=?';

// // 使用数组的形式，依次为 ？ 占位符具体的值ƒ
// db.query(sqlStr2, [user,user.id], (err, results) => {
//     // 执行 sql 语句失败了
//     if (err) return console.log(err.message);

//     // 注意：如果执行的是 update 语句，则返回的是一个对象，里面的 affectedRows 表示插入是否成功
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功');
//     }
// })



// 删除数据（删除id为28的数据）
// const sqlStr = 'delete from users where id=?';

// // 如果sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// // 如果 sql 语句中只有一个占位符，则可以省略数组
// db.query(sqlStr, 28, (err, results) => {
//     if (err) return console.log(err.message);

//     // 注意：如果执行的是 delete 语句，则返回的是一个对象，里面的 affectedRows 表示插入是否成功
//     if (results.affectedRows === 1) {
//         console.log('删除成功');
//     }
// })




// 由于直接执行 delete 会删除数据库中的数据，很危险
// 所以一般我们采用标记清除的办法，将 status 设置为1
const sqlStr3 = 'update users set status=? where id=?';
db.query(sqlStr3,[1,22],(err,results)=>{
    if (err) return console.log(err.message);

    if (results.affectedRows===1){
        console.log('标记删除成功 ');
    }
})