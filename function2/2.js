function gildong() {
  // return undefined; >> return을 생략하면 return undefined;
}

/*
  처음 보는 함수가 있습니다.
  이 함수는 메소드로 사용해야 할까요? 생성자로 사용해야 할까요?
  암묵적인 룰 : 생성자 용 함수는 대문자로 시작하자!!
*/

var result = gildong();
console.log(result);

function Car() {

}

// var c = Car(); // 대문자로 시작하는 함수는 생성자용 함수이기 때문에 이렇게 쓰면 안됨. 왕따당함.
var c = new Car();
console.log(typeof c);
console.log(c); // Car {}
