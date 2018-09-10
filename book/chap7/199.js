console.log(x); // 왜 error가 안나고 undefined가 뜨나?

var x = 10;
var x = 20; // var는 재선언 가능

console.log(x);

console.log(y); // TDZ: let, const 자원은 초기화 전에 사용이 불가하다.

let y = 10;
// let y = 20; // let, const 재선언 불가능
// 변수를 선언할때 가능한한 const부터 고려할 것. 다음은 let.


// 호이스팅 관련해서 199.2와 비교해서 볼것