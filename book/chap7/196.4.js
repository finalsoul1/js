console.log('START');

// var fn = function() {
//   console.log(i);
// };


for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
} 
// 함수와 let i가 그 상태로 클로저 스코프로 묶여서 1초 후에 호출됨.
// var의 경우 범위연산자가 영향을 못주기 때문에 따로 묶지 않는다.

console.log('END');

// START
// END
// 1
// 2
// 3