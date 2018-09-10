/*
  IIFE (Immediately Invoked Function Expressions)
*/


// 'use strict'; 
// 개발자가 스스로 컴파일러에게 엄격한 방식으로 코드를 검증하라고 요청한다

(function() {
  console.log('Hi');
})();

var a = 10; // 전역변수
b = 20; // Bad! // 전역객체(global)의 프로퍼티

console.log(global.a);
console.log(global.b);

// iife 단축키
(function() {
  'use strict';

}());

console.log('----------1----------');

const message = (function() {
  const secret = "I'm a secret!";
  return `The secret is ${secret.length} characters long.`;
})();
console.log(message);


const f = (function() {
  let count = 0;
  return function() {
    return `I have been called ${++count} time(s).`;
  } // count변수는 함수 내에서만 접근가능, 의도적으로 차단시킨거임
})();
// console.log(count); // 함수 내에 선언된 프로퍼티는 지역변수, 밖에서 접근불가

(function() {
 // 변수, 함수를 외부와 격리하여 사용하고 싶을 때
 // IIFE 식을 사용합니다.
}());

f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
console.log(f()); // 3