let obj = {a:10};

obj.b = 20;

Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj); 

console.log(Object.getOwnPropertyDescriptor(obj, 'c'));
// { value: 30,
//   writable: true,
//   enumerable: true,
//   configurable: false }

Object.freeze(obj);
// 객체안의 모든 프로퍼티가 writable: false,
// configurable: true 로 변경됩니다.

console.log(Object.isFrozen(obj));

// { value: 10,
//   writable: true, // 값 수정 가능
//   enumerable: true, // console.log, for-in 처리가능
//   configurable: true } // 프로퍼티 삭제 가능
console.log(Object.getOwnPropertyDescriptor(obj, 'b'));
console.log(Object.getOwnPropertyDescriptor(obj, 'c'));
