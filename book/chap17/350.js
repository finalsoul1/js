let str = 'I love you!';

// split(): 괄호안에 문자열로 구분해서 배열에 넣어서 리턴
let arr = str.split(' ');
console.log(arr);

let result = str.replace(/\s/g, ','); // \s: 모든 공백(스페이스, 탭, 줄바꿈 등)
console.log(result);
let result2 = str.replace(/ /g, ','); // ' ': 스페이스
console.log(result2);
