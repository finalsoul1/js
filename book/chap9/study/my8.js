// class는 Hoisting 이 안된다. 항상 위에 선언하자.
// class는 재정의도 허용하지 않는다.
class Car { 
  constructor(color){
    this.color = color || 'Red';
  }
}

// Sedan Is-A Car
class Sedan extends Car {
  
}

var car1 = new Car('');
console.log(car1);

var car2 = new Car('Blue');
console.log(car2);