// 생성자 함수
// class Car {
//   constructor() {
//     let count = 4;
//     this.color = 'Red';
//     this.doors = count;
//   }
// 
//   show() {
//     console.log('this.color = ' + this.color);
//   }
// 
//   static info(obj) {
//     console.log('obj.color = ' + obj.color);
//   }
// }

function Car() {
  let count = 4;
  this.color = 'Red';
  this.doors = count;
}

Car.prototype.show = function() {
  console.log('this.color = ' + this.color);
};

Car.info = function(obj) {
  console.log('obj.color = ' + obj.color);
};

let car = new Car();

car.show(); 

Car.info(car);

Car.info({
  color: 'Pink'
})
