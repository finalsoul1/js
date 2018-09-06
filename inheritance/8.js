/*
  상속을 설정하기 위한 extends 키워드가 없다. ES5 버전 이하 기준
  현재 사용하는 대부분의 브라우저는 ES5버전을 지원한다.
  함수객체끼리 상속을 연결하는 것이 아니고
  정확히 설명하면, 함수가 가진 프로토타입 객체끼리 상속이 연결되는 것이다.
  Prptotype Chaining : 프로토타입 객체끼리 __proto__ 프로퍼티로 
  부모-자식 관계가 연결됩니다.
*/


function Vehicle() {
  this.run = function() {
    console.log('vehicle is running');
  };
}

Vehicle.prototype.move = function() {
  console.log('vehicle is moving');
};

// Car is a Vehicle
function Car() {
  this.doors = 4;
}

// 자바의 extends에 해당
Car.prototype.__proto__ = Vehicle.prototype;

// var car = new Car();
// console.log(car);
// car.run();
// 
// // // Bus is a Vehicle
// // function Bus() {
// //   thism.doors = 2;
// //   this.color = 2;
// // }
// 
// Bus.prototype = new Vehicle();