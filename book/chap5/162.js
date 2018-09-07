const obj = { b: 2, c: 3, d: 4 };

let a, b, c;

console.log(a, b, c);

// this produces an error:
// {a, b, c} = obj;

// this works:
({a, b, c} = obj); // 괄호 왜 치는지?

console.log(a, b, c);

console.log('-----1-----');

// a normal array
const arr = [1, 2, 3];
// array destructuring assignment

let [x, y] = arr; // 배열은 인덱스만 있기 때문에 순서대로 들어감
console.log(x); // 1
console.log(y); // 2
// z; // error: z hasn't been defined

console.log('-----2-----');

// ...rest : 나머지 파라미터 : 나머지 값들을 모아서 배열로 할당한다.
const arr2 = [1, 2, 3, 4, 5];
let [x1, y1, ...rest] = arr2;

console.log(x1, y1, rest);
console.log(Array.isArray(rest));

function add (a, b, c) {
  return a + b + c;
}

console.log(add(...rest)); // Spread Operator 배열을 쪼갬

console.log('-----3-----');

let a2 = 5, b2 = 10;
[a2, b2] = [b2, a2]; // 해체 할당 문법의 응용

console.log(a2, b2);