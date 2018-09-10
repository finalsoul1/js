// 베열을 이용하여 다음 단어를 뒤집어서 출력하세요.
// hello 문자열을 받아서 olleh를 리턴

// var str = "hello";
// console.log(str);
// var arr = str.split('').reverse().join('');
// console.log(arr);


function riverce() {
  for (var i = 0; i < arr.length; i++) {
    var a = arr.pop();
    
    console.log(a);
    
    arr.unshift(a);
    
    console.log(arr);
  }
  return arr;
}


console.log(riverce());