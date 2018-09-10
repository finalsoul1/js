var arr = [1, 5, 7];

var ret = arr.splice(1, 1); // 첫번째 매겨변수는 수정을 시작할 인덱스이고
// 두번째 매개변수는 제거할 요소의 숫자입니다.
// 0을 넣으면 아무것도 제거하지 않고 나머지 매개변수는 배열에 추가될 요소입니다.
// 제거한 요소를 배열로 리턴합니다.
console.log(ret); // [5]
console.log(arr); // [1, 7]

arr = [1, 5, 7];

arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
console.log(arr);
arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]


arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);

arr = [1, 2, 3, 4];

arr.copyWithin(2, 0, 2); 

arr = [1, 2, 3, 4];

arr.copyWithin(0, -3, -1); 
console.log(arr);


