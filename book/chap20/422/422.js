const fs = require('fs');

const dir = __dirname + '/';

const ws = fs.createWriteStream(dir + 'stream.txt', {
  encoding: 'utf8'
});

ws.write('line 1\n');
ws.write('line 2\n');
ws.write('line 3\n');
ws.write('line 4\n');
ws.write('line 5\n');
ws.write('line 6\n');
ws.write('line 7\n');
ws.end();

console.log('DONE.');