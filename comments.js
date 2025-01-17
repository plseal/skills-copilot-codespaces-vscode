// cteate web server
// 1. include http module
var http = require('http');
// 2. create server
http.createServer(function(req, res){
    // 3. set response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // 4. set response body
    res.write('<h1>Web Server</hjson>');
    // 5. end response
    res.end();
}).listen(3000);

console.log('Server is running at http://localhost:3000');
// 6. run server