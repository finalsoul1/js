var skipIt = true;
let x = 0;
var result = skipIt || x++; // 후위연산자는 먼저 할당하고 증가함

console.log(x, result);
// 앞에께 트루면 앞에껄 넣고 앞에께 펄스면 뒤에껄 넣어라

skipIt = 10;
x = 0;
result = skipIt || x++; // 후위연산자는 먼저 할당하고 증가함

console.log(x, result);

skipIt = false;
x = 0;
result = skipIt || x++; // 후위연산자는 먼저 할당하고 증가함

console.log(x, result);

skipIt = "사용자가 입력한 문자열";
x = 0;
result = skipIt || x++; // 후위연산자는 먼저 할당하고 증가함

console.log(x, result);
