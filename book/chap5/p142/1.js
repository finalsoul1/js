const x = 5;
console.log(-x);
console.log(3 - -5);
console.log(3 - (-5)); // 3+5
const y = 3 - -x; // Bad!
console.log(y);

console.log('----------------------');

var a = 10;
var b = 10;

console.log(a == b); // 동등: 값만 비교
console.log(a === b); // 일치: 값 비교 + 자료형 비교

var str1 = "10";
var str2 = "10";
var str3 = new String("10");

console.log('#1', str1 == str2);
console.log('#2', str1 === str2);
console.log('#3', str1 == str3);
console.log('#4', str1 === str3);

console.log(10 == '10'); // true
console.log(10 === '10'); // false
