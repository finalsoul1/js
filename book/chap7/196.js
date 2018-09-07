let globalFunc; // undefined global function

{
  let some = 'hi';
  let blockVar = 'a'; // block-scoped variable

  globalFunc = function() {
    console.log(blockVar);
  }
} // 원래는 중괄호가 닫히면 blockVar변수는 지워진다.
// 하지만 함수가 blockVar변수를 인용하고 있기 때문에 컴파일러가 함수와 함수가
// 사용하는 외부자원까지 묶어서 클로져 스코프로 유지시킨다

globalFunc(); // logs "a"

console.log('----------------');

let f; // undefined function
{
  let o = { // 객체를 선언할때 중괄호는 범위연산자가 아님, 그냥 객체 선언 문법임
    note: 'Safe'
  };
  f = function() { // 함수는 범위연산자 맞음, 함수스코프
    return o;
  };
} 

let oRef = f(); // () = 함수를 실행하자.

console.log(oRef);

oRef.note = "Not so safe after all!";

console.log(oRef);

