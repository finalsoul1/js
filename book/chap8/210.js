var arr = new Array(5).fill(1); // arr initialized to [1, 1, 1, 1, 1]
console.log(arr);

arr.fill("a"); // arr is now ["a", "a", "a", "a", "a"]
console.log(arr);

arr.fill("b", 1); // arr is now ["a", "b", "b", "b", "b"]
console.log(arr);

arr.fill("c", 2, 4); // arr is now ["a", "b", "c", "c", "b"]
console.log(arr);

arr.fill(5.5, -4); // arr is now ["a", 5.5, 5.5, 5.5, 5.5]
console.log(arr);

arr.fill(0, -3, -1); // arr is now ["a", 5.5, 0, 0, 5.5]
console.log(arr);
// 세번째 매개변수 자리 포함 안함

console.log('-------------------');

arr = [1, 2, 3, 4, 5];
arr.reverse(); // arr is now [5, 4, 3, 2, 1]
console.log(arr);

arr.sort(); // arr is now [1, 2, 3, 4, 5]
console.log(arr); // 기본적으로 오름차순 정렬

console.log('-------------------');

arr = [5, 3, 20, 4, 100];

console.log(arr);
arr.sort(); // 문자열로 취급하여 정렬합니다.
console.log(arr);

arr = [5, 3, 20, 4, 100];

arr.sort(function (item1, item2)
{
  return item1 > item2;
});
// 정렬 시 개발자가 전달해 준 익명함수 컴패레이터 로직을 사용하여 어떤게 큰지
// 판단합니다.
console.log(arr);

console.log('-------------------');

arr = [{ name: "Suzanne" }, { name: "Jim" },
{ name: "Trevor" }, { name: "Amanda" }];
console.log(arr);

arr.sort(); // arr unchanged
arr.sort((a, b) => a.name > b.name); // arr sorted alphabetically
// by name property
console.log(arr);

arr.sort((a, b) => a.name[1] < b.name[1]); // arr sorted reverse alphabetically
// by second letter of name property
console.log(arr);

