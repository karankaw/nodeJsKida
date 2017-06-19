const http = require('http');
const fs = require('fs');
const util = require('util');



var server = http.createServer(function(req, res){
console.log("Request was made", req.url);
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.statusMessage = 'Not found';
res.statusCode = 200

// res.header("Content-Type", "text/html")
res.setHeader("Content-Type", "text/html")

// res.end('Hey Ninjas');
// fs.createReadStream(__dirname+'/index.html').pipe(res);

res.write("<h1>HMMMMM</h1>")
res.write("<h1>OKK</h1>")
// if(req.url === '/error'){
// util.puts('HMM Error Happened No ???');
// throw 'AStringServerError';
// }

setTimeout(function () {  
  res.end("Finally ENDED")
}, 15000);

});
server.listen(3000);
//server.listen(3000, ,'127.0.0.1');

/*setTimeout(function () {  
  util.puts('Throwing error now.');
  throw new Error('User generated fault.');
}, 15000);*/

