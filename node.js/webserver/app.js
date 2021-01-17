const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
  console.log(request.url);

  // 1. 获取地址
  let pathname = require.url;

  // 2. 通过fs读取文件
  if (pathname !== './favicon.ico') {
    fs.readFile('./'+pathname,(err, data) => {
      if(err){
        response.writeHead(200, {'Content-Type': 'text/html; charset="utf-8"'});
        response.end('404，页面不存在');
        return;
      }
    
      response.writeHead(200, {'Content-Type': 'text/html; charset="utf-8"'});
      response.end(data);
    })
  }







}).listen(8081);


console.log('Server running at http://127.0.0.1:8081/');