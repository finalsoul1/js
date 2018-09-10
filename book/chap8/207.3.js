// 베열을 이용하여 다음 단어를 뒤집어서 출력하세요.
// hello 문자열을 받아서 olleh를 리턴

// var str = "hello";
// console.log(str);
// var arr = str.split('').reverse().join('');
// console.log(arr);


function myReverce(input = "") {
  // let ary = [];
  // for (var i = 0; i < input.length; i++) {
  //   ary[i] = input[i]; // string도 이게 가능
  // }
  let ary = input.split(''); // 문자열을 배열로 바꿔줌.
  console.log(ary);
  
  // let size = ary.length;
  // let arr = [];
  // for (var i = 0; i < size; i++) {
  //   arr[i] = ary.pop();
  // }
  let arr = ary.reverse(); // 뒤집어줌
  console.log(arr);
  
  let output = arr.join('');
  return output;
}

console.log(myReverce("hello"));

console.log('------------------');

let str = "helloo";
console.log(str.split('').reverse().join('')); 
// 배열로 바꾸고 뒤집은 다음 다시 문자열로 할당.