// => 보충설명

global.a = 'global.a';

function foo() {
  console.log(this === global, this === foo, this.a);
}


foo.a = 'foo.a';
// #1
foo(); // true false 'global.a'

// #2
foo.call(foo); // false true 'foo.a' 개발자가 직접 this를 지정

// #3
var obj= {
  a: 'obj.a',
  foo: function () {
    console.log(this === global, this === foo, this.a);
    // false false 'obj.a'
  }
};
obj.foo(); // 함수의 소유자가 명시되면

// #4
function Car() {
  this.color = 'Red'; // 새로만든 객체가 this가 됨
}
var car = new Car();
console.log(car);