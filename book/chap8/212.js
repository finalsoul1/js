var arr = [
  { id: 5, name: "Judith" }, 
  { id: 7, name: "Francis" }
];

var ret = arr.indexOf({id: 5, name: "Judith"});
console.log(ret);

// 객체 안의 값을 검색하고 싶을때
ret = arr.findIndex(o => o.id === 5); // returns 0
console.log(ret); // 인덱스를 리턴

arr.findIndex(o => o.name === "Francis"); // returns 1
arr.findIndex(o => o === 3); // returns -1
arr.findIndex(o => o.id === 17); // returns -1

console.log('----------------');

arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];

arr.find(o => o.id === 5); // returns object { id: 5, name: "Judith" }
// 객체 안의 값을 검색하고 그 객체를 리턴

arr.find(o => o.id === 2); // returns null

console.log('----------------');

arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];

// 배열 0, 1, 2 방의 값은 무시하고 배열3 이상의 값 중에서 스퀘어 루트 함수를 통해
// 구한 결과가 정수인 경우 해당 배열 요소의 값을 리턴한다.
ret = arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))
// x: 배열의 요소 값, i: for문의 회전 인덱스
); 

console.log(ret); // return 4;

