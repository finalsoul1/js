// function Function() {.....}
//
// function Object() {.....}

// Functions 라인은 함수(함수이자 객체), Prototypes 라인은 객체
// 함수는 기동로직을 갖고있는 객체, 객체는 그냥 멤버만 갖고있음
// 기능적으로 보면, 함수 === 객체 + 로직

/*
  함수는 선언만 하면 컴파일러가 처리하는 시점에 객체가 됩니다.
  함수를 메모리에 등록하는 과정을 개발자가 별도로 수행할 필요가 없습니다.
  즉, 함수는 선언 즉시 객체로 바라보면 됩니다.
  함수는 객체이므로 자신만의 프로퍼티를 가질 수 있습니다.
  함수는 자동으로 히든 프로퍼티 prototype을 가지며 이 속성으로 상속용 객체를
  자동으로 갖게 됩니다.
*/

var x = 11;
var y = "Tom";  // x, y는 변수 / a는 프로퍼티
// 위치에 따라 문법이 다름

// key: value 형태
var obj = {
  a: 10, // 객체를 만드는 과정에 프로퍼티를 쓰는 문법
  print: function() { // 객체의 멤버인 함수는 메소드라고 부른다.
    console.log('a = ' + this.a);
  }
};

console.log(obj.a);
obj.print();


// 한 함수를 선언하면 객체 2개가 만들어진다
// 1. 함수객체 Foo
// 2. Foo.prototype 히든 프로퍼티가 가리키는 객체

function Foo() {

}

Foo.x = 100; // 개발자가 직접 동적으로 x 프로퍼티를 추가합니다.

console.log(Foo.prototype);

console.log(Foo.prototype.constructor == Foo); // true
// prototype은 Foo.prototype(객체)를 가리키는 함수Foo의 프로퍼티,
// constructor는 함수Foo를 가리키는 Foo.prototype의 프로퍼티
