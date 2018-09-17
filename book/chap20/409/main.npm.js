const fs = require('fs');

console.log(typeof fs);

// 이미 처리한 대상을 재 사용한다.
const fs2 = require('fs');

console.log(fs === fs2);

// npm init -y: package.json 파일 생성

const colors = require('colors');

console.log('Hello'. red);
console.log('Hello'. green);
console.log('Hello'. blue);

// book 폴더 밑에 있는 node.modules 폴더 밑에 설치되어 있는 것을 사용.
const _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
// 배열을 한겹씩 벗기면서 결합하여 새 배열로 리턴.
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]