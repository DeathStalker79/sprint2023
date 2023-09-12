const http = require('http');
const url = require("url");
const photoRequest = require('./request');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    const reqUrl = url.parse(request.url).pathname;
    if(reqUrl == "/photo-request") {
        let ok = photoRequest.getPhoto()
        response.write('File created');
        response.end()
    }
    else {
        response.end('Main page');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});