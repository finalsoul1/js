// ES5 이전에 사용하던 모습
function Car() {
  let count = 4;
  // 새로 생성되는 객체의 기본 프로퍼티를 추가하는 작업
  this.color = 'Red';
  this.doors = count;
}

// 부모가 자식객체에게 제공하는 자원
Car.prototype.show = function () {
  console.log('this.color = ' + this.color);
};

// 상속과 무관, Car 함수객체가 직접 갖고 있으면서 
// 누구에게나 제공하고 싶은 자원을 배치
Car.info = function (obj) {
  console.log('obj.color = ' + obj.color);
}

console.log(Number.parseInt("3.14")); 
// 원래는 Number 생성자 함수가 직접 갖고있는 parseInt를 가져다 쓰는거다.
// System.out.println(); out 자원은 static 자원으로
// 소유클래스.스테틱자원 방식으로 접근한다.

let car = new Car(); 
// car가 가르키는 객체(부모)는 자동으로 Car.prototype이 된다.
// 함수Car로 만든 객체 car의 부모는 Car.prototype이지 함수Car가 아니다.
// 따라서 함수Car의 info프로퍼티는 직접 못씀.

console.log(car);
console.log(car.color); // 직접 소유한 자원
car.show(); // 부모가 소유한 자원, 자식만 사용 가능

Car.info(car); // Car와 관련된 기능을 본인이 직접 갖고있는것.
// 상속과 무관, 누구라도 사용 가능

Car.info({color:'Pink'})