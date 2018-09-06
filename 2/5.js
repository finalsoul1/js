// 함수를 선언하면 컴파일러가 함수를 발견할 때 객체처리를 갱신한다
// 하지만 함수의 로직이 수행되는 것은 아니다
// 함수가 호출될때 로직수행
function proceed() {
  // 111<i>222</i>333 입력
  var elem = document.getElementById("txt");
  // console.log(elem.value);
  var txt1 = document.getElementById("target1");
  // 111<i>222</i>333
  txt1.innerText = elem.value;
  var txt2 = document.getElementById("target2");
  // 111222333 innerHTML -> html 태그를 처리해서 보여줌
  txt2.innerHTML = elem.value;
}
