let str = ' something ';

let result = str.trim(); // 스트링.trim(): 앞뒤 공백을 없애라.

console.log(result);
console.log(result.length);

// [^~]: ~이 아닌것, ^~: ~로 시작하는
let result2 = str.replace(/^\s|\s$/g,''); 
// ^~은 ~로 시작하는, ~$은 ~로 끝나는 걸 골라서 ''로 바꾼걸 리턴
console.log(result2);
console.log(result2.length);

console.log('--------------------');

const beer99 = "99 bottles of beer on the wall " +
"take 1 down and pass it around -- " +
"98 bottles of beer on the wall.";

const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
// 세자리숫자|두자리숫자|한자리숫자
console.log(match);

//[0-9]{1,3} == [0-9][0-9][0-9] | [0-9][0-9] | [0-9] // 순서도 중요함
// 앞에꺼부터 찾음 ex) [0-9]부터 쓰면 한자리숫자로 다 찾아버림.

let name = "Heungmin Son";
name = name.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(name); // Son Heungmin
// (): 캡쳐링, $1랑 짝지어짐, 임시 메모리에 보관

// 책이랑 같이 보자
// https://regexr.com/3vd74
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D