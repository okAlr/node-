const fs = require('fs');
const path = require('path');

// 定义正则表达式，分别匹配 <script></script> <style></style> 标签
// \s 表示空白字符，\S 表示非空白字符
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;


fs.readFile(path.join(__dirname, '/files/5.clock.html'), 'utf-8', function (err, data) {
    if (err) {
        return console.log('读取失败：', err.message);
    }

    // 分别拆解出 js，css 和 html，注意正则的使用方法很重要
    resolveCss(data);
    resolveJS(data);
    resolveHtml(data);

})


function resolveCss(data) {
    // 使用正则提取需要的内容
    const r1 = regStyle.exec(data);
    // console.log(r1);

    const newCss = r1[0].replace('<style>', '').replace('</style>', '');

    fs.writeFile(path.join(__dirname, 'files/clock/index.css'), newCss, function (err) {
        if (err) {
            return console.log('写入css失败', err.message);
        }
        console.log('写入css成功');
    })
}


function resolveHtml(data) {
    let str = data.replace(regScript, '<script src="./index.js"></script>').replace(regStyle, '<link rel="stylesheet" href="./index.css">');

    fs.writeFile(path.join(__dirname, 'files/clock/index.html'), str, function (err) {
        if (err) {
            return console.log('写入html失败', err.message);
        }

        console.log('写入html成功');
    })
}

function resolveJS(data) {
    let newJs = regScript.exec(data)[0].replace('<script>', '').replace('</script>', '');

    fs.writeFile(path.join(__dirname, 'files/clock/index.js'), newJs, function (err) {
        if (err) {
            return console.log('写入js失败', err.message);
        }

        console.log('写入js成功');
    })
}