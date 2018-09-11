class Car { 
  constructor(color){
    this.color = color || 'Red';
  }
  print(){
    console.log('this.color = ' + this.color);
  }
}

// Sedan Is-A Car
class Sedan extends Car {

  constructor(kolor, doors = 4){ // 파라미터자리 할당은 조건할당
    super(kolor); 
    this.doors = doors;
  }
  // @Override
  print(){
    super.print(); // 결국 super는 Car.prototype 객체를 가리킴
    console.log('this.doors = ' + this.doors);
  }
}

var sedan = new Sedan('Blue');
console.log(sedan);
sedan.print();
