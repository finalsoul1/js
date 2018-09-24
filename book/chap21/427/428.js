/*
  프로퍼티 descriptor의 2가지 종류
  1. data descriptor : 데이터 프로퍼티
  2. accessor descriptors : 접근제어 프로퍼티
*/

log = console.log;

let obj = {a:10}; // 데이터 프로퍼티

Object.defineProperty(obj, 'b', { //접근제어 프로퍼티
  get: function () {
    // 여기에 값를 가공하는 비즈니스 로직을 배치
    return this.a;
  },
  set: function (a) {
    this.a = a / 10;
  },
  enumerable: true,
  configurable: true
});

log(obj);

log(Object.getOwnPropertyDescriptor(obj, 'b'));
// { get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true }

log(obj.a);
log(obj.b);

obj.b = 200;
log(obj);
log('--------------------------');


class Square {
  constructor(length = 10){
    this.length = length;
  }
  get area(){
    return this.length * this.length;
  }
  set area(area){
    this.length = Math.sqrt(area, 2);
  }
}
let s = new Square();
log(s);
log(s.area); // 100
s.area =  400;
log(s);

log(Object.getOwnPropertyDescriptor(Square.prototype, 'area'));
// { get: [Function: get area],
//   set: [Function: set area],
//   enumerable: false,
//   configurable: true }

log(Object.keys(s)); // [ 'length' ]
