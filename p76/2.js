var a = 10;
b = 20; // Bad! : global 객체에 추가된다.

console.log(a);
console.log(b);

// 선언을 b처럼 하면 노드 컴파일러로 컴파일하면 전역객체 global에 추가된다.
// 그럴 필요가 없다.
console.log(global.b);

const PI = 3.141592; // scope 룰은 let과 동일

// PI = 3.15; // 재할당 금지
//TypeError: Assignment to constant variable.

