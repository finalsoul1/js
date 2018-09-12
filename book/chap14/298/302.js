const Promise = require('bluebird');
// fs 모듈내 함수는 이제 모두 프라미스 객체를 리턴합니다.
const fs = Promise.promisifyAll(require('fs'));

console.log(__dirname);

let dir = __dirname + '/';
console.log('START');

let result1;
let result2;
let result3;

fs.readFileAsync(dir + 'a.txt')
  .then(function(dataA) {
    result1 = dataA;
    return fs.readFileAsync(dir + 'b.txt');
  }) // then은 프라미스 객체를 리턴하기 때문에 거기에 또 점을 찍을수 있음
  .then(function(dataB) {
    result2 = dataB;
    return fs.readFileAsync(dir + 'c.txt');
  })
  .then(function(dataC) {
    result3 = dataC;
    let data = result1 + result2 + result3;
    fs.writeFileAsync(dir + 'd.txt', data);
    console.log('DONE');
  })
  .catch(function(err) {
    if (err) console.error(err);
  });