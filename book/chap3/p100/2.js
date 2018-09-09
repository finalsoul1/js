var n1 = 0;

// 관습적으로 처리하는 방식을 컴파일러가 받아들여서 다음처럼 처리한다.
// number >> 0: false, 나머진 다 true
// string >> "":false
// null, undefined >> false
// object >> true
if (n1) { // JS에선 숫자 문자 객체 등 다 올수있음
  console.log('True');
} else {
  console.log('False');
}

///////////////////////////////
var n2 = " "; // 공백도 true

if (n2) {
  console.log('True');
} else {
  console.log('False');
}

///////////////////////////////
var n3 = {}; // 객체면 true

if (n3) {
  console.log('True');
} else {
  console.log('False');
}
