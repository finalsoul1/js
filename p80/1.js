// 숫자, 문자열은 immutable 입니다.
// immutable 이란 말은 만들어진 메모리에 덮어쓰기가 안된다는 말
// 내용이 바뀔때마다 공간이 새로 만들어짐

var pi = 3.14;

var str = "Hello";
var str2 = "Hello";
var str3 = new String("Hello"); // Bad!

console.log(str);
console.log(str2);
console.log(str3);
console.log(str3.toString());

// == : 동등 비교 연산자, 취급하는 값이 같나요?
// === : 동일 비교 연산자, 메모리가 같은 곳인가요?

console.log(str == str2); // true
console.log(str === str2); // true

console.log(str == str3); // true
console.log(str === str3); // false

var txt = "";

for (var i = 0; i < 10; i++) {
  txt += i; // Bad!! // 문자열 객체가 계속 새로만들어지기 때문에 비효율
}

console.log(txt);

// StringBuffer가 없다?