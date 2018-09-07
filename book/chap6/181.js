// => : 뚱뚱한 화살표 연산자 (자바는 ->를 사용)
// const f1 = function() {
//   return "hello!";
// }
// OR
const f1 = () => "hello!"; 
console.log(f1());

// const f2 = function(name) {
//   return `Hello, ${name}!`;
// }
// OR
const f2 = name => `Hello, ${name}!`;
console.log(f2("Tom"));

// const f3 = function(a, b) {
//   return a + b;
// }
// OR
const f3 = (a, b) => a + b;
console.log(f3(2, 5));

