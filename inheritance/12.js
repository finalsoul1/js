
function Vehicle() {
  this.color = "Red"; // 여기서 this는 새로만드는 객체에 직접 들어간다는 의미
  this.print = function() {
    console.log("Vehicle # print() called");
  };
}

function Car() {
  // Vehicle();
  
  // new 연산자와 같이 함수를 호출했으므로
  // 이 경우 Function Context는 새로 만드는 객체이다.
  Vehicle.call(this); // Function Context를 알려주고 호출한다.
  // 둘다 함수 Vehicle을 호출하는 문법
}

Car.prototype.__proto__ = Vehicle.prototype;

var car = new Car();
console.log(car);
console.log(car.color); // undefined
car.print(); // TypeError: car.print is not a function
