const fs = require('fs');

const dir = __dirname + '/';

const rs = fs.createReadStream(dir + 'stream.txt', {
  encoding: 'utf8'
});

// 여기 data, end는 예약어
rs.on('data', function(data) {
  console.log('>> data: ' + data.replace('\n', '\\n'));
});

rs.on('end', function(data) {
  console.log('>> end');
});