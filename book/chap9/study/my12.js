class Square {
  constructor(length = 10){
    this.length = length;
    // this.area = length * length;
  }
  show(){
    console.log('this.length = ', this.length);
  }
  // 프로퍼티로 면적정보를 갖고 있지 않아도 다른 프로퍼티로 필요한 값을 받아서
  // 구할 수 있는 경우 get, set 로직으로 갖고 있는다.
  // 얘네도 Square.prototype 객체에 들어간다.
  get area(){
    return this.length * this.length;
  }
  set area(area){
    this.length = Math.sqrt(area); // Math.sqrt = 루트
  }
}

let s = new Square();
console.log(s);
console.log(s.length);
console.log(s.area); // () 괄호 사용하지 않는다. 
s.area = 400; 
// () 괄호 사용하지 않는다. 
// 할당연산자 사용하면 set을,
// 그렇지 않으면 get을 호출한다.

console.log(s.length);
console.log(s.area);