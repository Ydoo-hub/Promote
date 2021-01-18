// 使用联想快速创建http.createServer(http服务)， 输入node 然后 选择node-http-server

// 引入http模块，引入之后可以使用http对应的api
var http = require('http');

// http.createServer 创建服务
/*
    request 获取url传递过来的信息
    response 给浏览器响应的信息
*/
http.createServer(function (request, response) {

    // 设置响应头
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 表示在页面输出一句话，并且结束响应
    response.end('Hello World');
}).listen(8081); // 监听的窗口

console.log('Server running at http://127.0.0.1:8081/');
