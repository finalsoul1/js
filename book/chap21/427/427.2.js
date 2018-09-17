let obj = {a:10};

obj.b = 20;

Object.defineProperty(obj, 'c', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(obj); // {a:10, b:20, c:30}

console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// { value: 10,
//   writable: true, // 값 수정 가능
//   enumerable: true, // console.log, for-in 처리가능
//   configurable: true } // 프로퍼티 삭제 가능
console.log(Object.getOwnPropertyDescriptor(obj, 'b'));
console.log(Object.getOwnPropertyDescriptor(obj, 'c'));

obj.c = 40; // writable: false 이므로 바뀌지 않는다.
console.log(obj.c);

