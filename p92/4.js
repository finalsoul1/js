var obj = {};

const SIZE = Symbol();

console.log(SIZE); // Symbol()
console.log(SIZE.toString()); // Symbol()
console.log(typeof SIZE); // symbol

obj.x = 10; // x는 문자열 "x"로 취급된다.

obj[SIZE] = 8; // 유니크한 심볼을 프로퍼티 키로 사용하는 방법

console.log(obj[SIZE]);