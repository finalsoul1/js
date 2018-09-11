class Car { 
  constructor(color){
    this.color = color || 'Red';
  }
}

// Sedan Is-A Car
class Sedan extends Car {

  // constructor(kolor){
  //   super(kolor); // this가 부모에게 자동으로 전달된다, 자바는 디폴트 생성자만 만들어줌
  // }
}

var sedan = new Sedan('Blue');
console.log(sedan);