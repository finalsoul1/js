let obj = {a:10};

obj.b = 20;

Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: false
});

console.log(obj); 

console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

delete obj.c;
// configurable: false이므로 삭제되지 않는다.

console.log(obj);

// { value: 10,
//   writable: true, // 값 수정 가능
//   enumerable: true, // console.log, for-in 처리가능
//   configurable: true } // 프로퍼티 삭제 가능
console.log(Object.getOwnPropertyDescriptor(obj, 'b'));
console.log(Object.getOwnPropertyDescriptor(obj, 'c'));
