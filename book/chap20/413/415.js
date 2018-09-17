const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), {
  encoding: 'utf8'
}, function(err, data) {
  // 비동기함수에서 주로 쓰는 에러코드
  if (err) return console.error('Error reading file.');
  // error가 발생하면 코드를 끊으라는 의미의 return
  console.log('File contents:');
  console.log(data);
});