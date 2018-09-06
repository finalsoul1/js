
function Foo() {

}

var f1 = new Foo();
console.log(f1); // Foo {} ==> 생성자 함수 Foo를 통해서 만들어진 객체

var o1 = new Object();
console.log(o1);

console.log(o1.__proto__ === Object.prototype);

Object.prototype.show = function() { // 모든 객체가 접근할 수 있다
  console.log("Hello World!");
};

o1.show(); // 아버지 객체의 자원을 사용합니다.
f1.show(); // 할아버지 객체의 자원을 사용합니다.