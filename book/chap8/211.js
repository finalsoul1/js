const o = {name: "Jerry"};
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
arr.indexOf(5); // returns 1 // 인덱스를 반환
arr.lastIndexOf(5); // returns 5
arr.indexOf("a"); // returns 2
arr.lastIndexOf("a"); // returns 2

arr.indexOf({name: "Jerry"}); // returns -1 // 찾지못하면 -1
// 값은 같지만 새 객체를 만든거기때문에 같은게 아니다.

arr.indexOf(o); // returns 3

arr.indexOf([1, 2]); // returns -1
// 배열을 새로 만든거기때문에 같은게 아니다.

arr.indexOf("9"); // returns 7
arr.indexOf(9); // returns -1
arr.indexOf("a", 5); // returns -1 // 두번째 파라미터는 검색 시작 인덱스
arr.indexOf(5, 5); // returns 5
arr.lastIndexOf(5, 4); // returns 1
arr.lastIndexOf(true, 3); // returns -1

// 이런식으로 씀
if (arr.indexOf("9") > -1) { // "9" 라는 문자열이 배열에 있다면
    console.log("9 있다!!"); // 메시지를 출력한다.
}