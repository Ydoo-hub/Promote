let http = require('http');

let tools = require('./tools');  // 拼接api
let value = require('./request');  //


console.log(tools);
console.log(value);


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(tools.formatApi("/admin/user"));

  response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');