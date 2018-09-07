var b = 20;

var obj = {
  a: 10,
  // b: b, // 앞에 b는 프로퍼티 b고 뒤에 b는 변수 b
  b, // == b: b
  // spaek: function speak() { // 앞은 프로퍼티 speak, 뒤는 함수 speak
  speak() { // 이렇게까지 줄일 수 있음, 프로퍼티 키가 익명함수를 가리키고있다.
    console.log('SPEAK!');
  },
};

console.log(obj);
obj.speak(); // 항상 프로퍼티 키 로 접근. 뒤에 함수명은 불필요해짐.
