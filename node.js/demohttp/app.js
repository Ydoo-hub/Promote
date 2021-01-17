// 引入http模块
const http = require("http");

// 引入 url 模块
const url = require('url');

// 创建服务
http.createServer((req, res) => {
    // console.log(req); 
    console.log(req.url); // 获取url

    // 设置响应头
    // 状态码200， 文件类型html 字符集 utf-8
    res.writeHead(200, {"Content-type": " text/html;charset='utf-8' "}); // 设置响应头，utf-8 解决乱码


    res.write('<head><meta charset="UTF-8"></head>'); // 给页面写入，或者这句话不用写，然后给上的utf-8去掉单引号也可以；

    res.write('this is nodejs');

    if(req.url !== '/favicon.ico') { // 一进入页面就发送了两个请求，这个时候就可以屏蔽 /favicon.ico 这个请求
        let geValue = url.parse(req.url, true).query;
        console.log(geValue.a, geValue.b);
    }

    res.end("结束响应");  // 这哥一定要写，不然会出现假死状态，然后浏览器一直在转
}).listen(3000);


// url 内容 api
/*
    url.parse("http://www.baidu.com/?a=123&b=321", true) 解析url, 两个参数，可以解析url，第一个参数是url的，第二个参数设置为true可以将该url中参数变成一个对象

*/