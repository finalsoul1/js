/*
  모든 함수가 가져야 할 공통 자원은
  Function.prototype 이 가리키는 객체에 배치하는 것이 좋다.
*/


function Foo() {

}

console.log(Foo.__proto__ === Function.prototype); 
// 함수의 부모는 코어개발자가 만든 함수 Function.prototype


var f1 = new Foo();
console.log(f1); // Foo {} ==> 생성자 함수 Foo를 통해서 만들어진 객체

console.log(f1.__proto__ === Function.prototype);

Function.prototype.say = function() {
  console.log("Hi World");
};

Foo.say();
Object.say();

{}