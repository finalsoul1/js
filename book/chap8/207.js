const arr = ["b", "c", "d"];

console.log('push--');
// arr[arr.length] = "e";
arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
console.log(arr);

console.log('pop--');

var ret = arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
// pop은 가장 끝에 자료를 빼버리고 뺀 자료를 리턴
console.log(ret);
console.log(arr);

console.log(arr[arr.length-1]); // 끝에 자료 조회
console.log(arr);

console.log('unshift--');

var size = arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
// unshift는 앞에 자료를 추가하고 배열 길이를 리턴함
console.log(arr);
console.log(size);

console.log('shift--');

var ret1 = arr.shift(); // returns "a"; arr is now ["b", "c", "d"]
// shift는 가장 앞에 자료를 빼버리고 뺀 자료를 리턴.
console.log(arr);
console.log(ret1);
