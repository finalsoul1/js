let obj = {a:10};
console.log(obj);

console.log(obj.b);
obj.b = 20;
console.log(obj.b);

Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj); // {a:10, b:20, c:30}

console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// { value: 10,
//   writable: true, // 값 수정 가능 (쓰기 가능한지)
//   enumerable: true, // console.log, for-in 처리가능 (나열 가능한지)
//   configurable: true } // 프로퍼티 삭제 가능 (설정 가능한지)

console.log(Object.getOwnPropertyDescriptor(obj, 'b'));
console.log(Object.getOwnPropertyDescriptor(obj, 'c'));
