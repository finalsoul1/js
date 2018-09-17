const fs = require('fs');

let data = 'hello from Node!';

let dir = __dirname + '/';
// __dirname: 예약어, 현재경로

console.log(__dirname);

// 파일명에 경로를 안주면 프로젝트 루트에 파일을 생성한다.
fs.writeFile(dir + 'hello.txt', data, function(err) {
  if (err) return console.log('Error writing to file.');
  console.log('DONE.');
});
