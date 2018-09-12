const input = "As I was going to Saint Ives";

// var obj = {};
// var arr = [];
// var regexp = /\./;

// word, 단어의 길이가 4 ~ N인 대상을 찾는다.
// /내용/뒤는 옵션임
// i: insensitive: 대소문자를 구분하지 않는다. (sensitive의 부정어)
// g: global: 줄 끝까지 계속해서 찾는다.
// m: multi-line: 다음줄도 찾는다.
let reg = /\w{4,}/ig; 

console.log(reg instanceof RegExp); // true, 정규표현식 객체

const output = input.replace(reg, '****'); 
console.log(output);