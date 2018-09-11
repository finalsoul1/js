// 생성자 함수
class Car {
  constructor() {
    let count = 4;
    this.color = 'Red';
    this.doors = count;
  }
  // 부모가 자식객체에게 제공하는 자원 
  // Car.prototype 객체에 추가한다.
  show() {
    console.log('this.color = ' + this.color);
  }
}

// 부모가 자식객체에게 제공하는 자원
// Car.prototype.show = function() {
//   console.log('this.color = ' + this.color);
// };


// 상속과 무관, Car 함수객체가 직접 갖고 있으면서 
// 누구에게나 제공하고 싶은 자원을 배치
Car.info = function(obj) {
  console.log('obj.color = ' + obj.color);
}

console.log(Number.parseInt("3.14"));


let car = new Car();


console.log(car);
console.log(car.color);
car.show(); 

Car.info(car); 

Car.info({
  color: 'Pink'
})