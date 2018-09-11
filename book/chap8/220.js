var arr = Array(10).map(function(x) { return 5 });
console.log(arr);

arr = Array(10); // 새 객체 만들어주기 패턴
arr.fill(5);
console.log(arr);

console.log('-----------------------');

arr = [1, 2, 3, 4, 5];

delete arr[2]; // 방을 없애는게 아니고 방의 값만 없앰
// 일반적으로 splice 함수를 사용하여 방자체를 삭제합니다.

var ret = arr.map(x => 0); // [0, 0, <1 empty slot>, 0, 0]

console.log(arr);
console.log(ret);

console.log('-----------------------');

arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
console.log(arr);


console.log(arr.join()); // "1,,hello,,true,"
console.log(arr.join('')); // "1hellotrue"
console.log(arr.join(' -- ')); // "1 -- -- hello -- -- true --"

console.log("Hello"[0]);

console.log('-----------------------');

const attributes = ["Nimble", "Perceptive", "Generous"];
var html = '<ul><li>' + 
  attributes.join('</li><li>') + 
  '</li></ul>';
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";

html = `
  <ul>
    <li>${attributes[0]}</li>
    <li>${attributes[1]}</li>
    <li>${attributes[2]}</li>
  </ul>
`;
console.log(html);

html = `
  <ul>
    <li>
      ${attributes.join('</li><li>')}
    </li>
  </ul>
`;
console.log(html);