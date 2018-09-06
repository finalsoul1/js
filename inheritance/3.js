/*
  일반적으로 모든 객체는 히든 프로퍼티 __proto__ 를 갖는다.
  __proto__ 프로퍼티로 부모 객체를 참조한다.
*/

// _ => 언더스코어

function Foo(name) {
  this.name = name || 'anonyomous'; // anonyomous라는 기본값을 할당하는 로직
}

var f1 = new Foo('F1'); // new로 만들면 Foo객체가 자동으로 갖고 있는, Foo.prototype이 부모다
console.log(f1);  

var f2 = new Foo('F2');
console.log(f2);


console.log(f1.__proto__ === Foo.prototype); // undefined가 안뜬다면 있다는 얘기, 히든 프로퍼티
console.log(f2.__proto__ === Foo.prototype);

// var obj = {a:100};
//
// console.log(obj.a);
// console.log(obj.b);
