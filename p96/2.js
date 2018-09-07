/*
  JSON(JavaScript Object Notation)
  자바스크립트 객체의 상태를 문자열로 표기하는 방법으로써
  객체 상태를 파일로 저장하거나 네트워크를 통해 주고 받을 때 사용하는 포멧입니다.
*/

var obj = {
  a: 10,
  b: 20,
  print: function() {
    console.log(this.a + this.b);
  }
};

var json = JSON.stringify(obj);

console.log(typeof json); // string
console.log(json); // {"a":10, "b":20}
// 주의 : JSON 포멧일 때 프로퍼티를 감싸는 "" 기호가 꼭 필요함

console.log('-----------------------');

var object = JSON.parse(json); // object
console.log(typeof object); // {a:10, b:20}
console.log(object); 

var ary = [10, 20, 30,];

obj.ary = ary;

console.log(JSON.stringify(obj)); // {"a":10,"b":20,"ary":[10,20,30]}
// 객체는 중괄호를 쓰고, 배열은 대괄호를 쓴다.
