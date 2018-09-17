const http = require('http');

const dir = __dirname + '/';

const server = http.createServer(function(req, res) {
  
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    const fs = require('fs');
    fs.createReadStream(dir + 'favicon.ico').pipe(res);
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello world!');
  }
  
});

server.listen(8080, function() {
  console.log(`server startd on port 8080`);
});

