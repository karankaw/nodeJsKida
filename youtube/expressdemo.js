const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
console.log("Request was made", req.url);
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.statusMessage = 'Not found';
res.statusCode = 200

// res.header("Content-Type", "text/html")
res.setHeader("Content-Type", "text/html")

// res.end('Hey Ninjas');
fs.createReadStream(__dirname+'/index.html').pipe(res);
});
server.listen(3000);
// server.listen(3000, ,'127.0.0.1');