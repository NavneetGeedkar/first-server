const http = require('http');

const port =8082;

http
 .createServer((require, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>Hello, this is my first server</h1>");
    response.end();

 })
 .listen(port, () => {
    console.log('Node.js server started on port ${port}');
 });