// 199에서 컴파일러가 호이스팅 한 후

// 스코프(글로벌과 함수 각각)마다 컴파일러가 자원(변수, 함수)을 호이스팅한 후 
// 처리를 시작한다. 

var x;
var x;


console.log(x);

x = 10; // 선언부 = 할당부
x = 20; // var는 재선언 가능

console.log(x);

console.log(y); 
// let, const 도 호이스팅은 되지만 초기화 전에 사용이 불가.

let y = 10;
// let y = 20; // let, const 재선언 불가능
// 변수를 선언할때 가능한한 const부터 고려할 것. 다음은 let.
