var obj = {
  a:10,
  b:20
};

console.log(obj.__proto__ === Object.prototype);

obj.__proto__ = {c:30}; // = 이제 obj객체의 부모는 {c:30}이다

console.log(obj.__proto__ === Object.prototype);

for (var variable in obj) { // 부모객체의 프로퍼티까지 보여줌
    console.log(variable, obj[variable]);
}

console.log('-----------------------------');

for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) { // 그 객체의 프로퍼티만 보여줌
    console.log(obj[variable]);
  }
}

// 연습
var ex = {
  a:20,
  b:10,
};

ex.__proto__ = {c:30};

for (var variable in ex) {

    console.log(variable,ex[variable]);

}
