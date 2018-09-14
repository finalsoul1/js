/*
  JavaScript Object Notation
  자바스크립트가 정한 객체를 문자열로 기록하여
  파일로 보관하거나 원격 서버에 전송하는 용도로 사용하는
  객체 표기법, JSON은 대중화 되어서 거의 대부분의 언어들이 채택하여
  사용하고 있다.
*/

var obj = {
  'a': 10, // number
  "b": { // object
    x: 100,
    y: 200
  },
  c: [10, 20, 30], // Array
  d: true, // boolean
  e: 'Hello World', // string
  print: function () { // Function // 객체의 멤버라 메소드
    console.log('Hello');
  }
};

// 객체상태를 문자열로 바꿔서 서버로 보낸다.
var jsonString = JSON.stringify(obj);
console.log(typeof jsonString);
console.log(jsonString);
// {"a":10,"b":{"x":100,"y":200},"c":[10,20,30],"d":true,"e":"Hello World"}
// 함수 메소드는 빠짐

// 서버에서 JSON 포맷의 문자열로 데이터를 응답해서 보내준다.

var jsonStringFromServer = `{
  "a":10,"b":{"x":100,"y":200},"c":[10,20,30],"d":true,"e":"Hello World"
}`;

var data = JSON.parse(jsonStringFromServer);
console.log(typeof data); // object
console.log(data);
 // { a: 10,
 //  b: { x: 100, y: 200 },
 //  c: [ 10, 20, 30 ],
 //  d: true,
 //  e: 'Hello World' }
  