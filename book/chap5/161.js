// 객체 선언
const obj = { b: 2, c: 3, d: 4 };

// var a;
// var b = obj.b;
// var c = obj.c; // 이 문법을 간단하게 표현한게 밑에 문법
//
// console.log(a);
// console.log(b);
// console.log(c);

// 해체 할당
const {a, b, c} = obj; // 대입연산자 앞의 {}은 객체선언이 아님
console.log(a); // undefined: there was no property "a" in obj
console.log(b); // 2
console.log(c); // 3
console.log(d); // reference error: "d" is not defined
