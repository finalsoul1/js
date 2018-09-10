const arr = [1, 2, 3];
var ret = arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(arr); 
console.log(ret);
// concat은 파리미터로 받은 값을 추가하여 새로운 배열을 생성. 원본은 그대로임.

// 파라미터로 받은 1차원 배열은 풀어서 적용한다.
arr.concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified

// 1차원 배열은 풀렸으나 2차원 배열은 안 풀고 바로 적용한다.
arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified

console.log('---------1--------');

const arr2 = [1, 2, 3, 4, 5];
var ret = arr2.slice(3); // returns [4, 5]; arr unmodified
console.log(arr2);
console.log(ret);

arr2.slice(2, 4); // returns [3, 4]; arr unmodified
arr2.slice(-2); // returns [4, 5]; arr unmodified 
// 음수는 배열의 끝에서부터 요소를 센다
arr2.slice(1, -2); // returns [2, 3]; arr unmodified
arr2.slice(-2, -1); // returns [4]; arr unmodified

var ret = arr2.slice();
console.log(ret);
console.log(arr2 === ret);