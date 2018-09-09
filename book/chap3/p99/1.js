const now = new Date();

console.log(now); //2018-09-06T07:08:55.419Z

console.log(now.getFullYear()); // 2018
console.log(now.getMonth()); // 8 (0-base) == 9월
console.log(now.getDate()); // 6
console.log(now.getHours()); // 16
console.log(now.getMinutes()); // 10
console.log(now.getSeconds()); // 8


// 2018-12-25일은 무슨 요일인가요?

const xmas = new Date(2018, 11, 25);

console.log(xmas.getDay()); // 2 (0은 일요일) 화요일

console.log('-------------------');

const email = /@/gi; // /사이에 있는 문자열이 있는가 확인함
/*
  /정규표현식/옵션
  정규표현식 선언법으로 작성하면 바로 객체로 취급된다.
*/

console.log(email.__proto__ === RegExp.prototype);

console.log(email.test("abc.com")); // false
console.log(email.test("abc@def.com")); // true
