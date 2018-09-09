const numStr = "33.3";

const num = Number(numStr); // new가 없음. new가 오는 순간 리턴값은 객체가 됨
// const num = parseInt(numStr); 얘는 정수로 바꾸는거라 실수부분은 버림 = 33
// const num = parseFloat(numStr); 얘는 실수.
// Number()는 정수, 실수 가리지 않음. 생성자 함수지만 그냥 메소드로 씀.
// const num = Number.parseFloat(numStr) // 원래는 이렇게 쓰는거지만 생략가능
// parse 시리즈는 Number 밑에 있는 멤버들

console.log(typeof num);

console.log(numStr + 10); // 33.310
console.log(num + 10); // 43.3

const d = new Date();
console.log(d);
const ts = d.valueOf()
console.log(ts); // 1536219050498 < 1536219075270

const n = 33.5;
console.log(typeof n);
// const s = n.toStrin`g();
const s = "" + n; // 숫자에 문자열 더하면 문자열됨.
console.log(typeof s);

console.log('-------------------');

const n1 = 0; // 관습적으로 0:false, 1:true
console.log(typeof !n1); // 자료형이 boolean으로 바뀜, 근데 !한번쓰면 의도했던 값까지 바껴버림

const b1 = !!n; // 원값이 1일때 true가 되어야 하므로 ! 한번 더 씀

const b2 = Boolean(n1);
console.log(typeof b2);

if (!!n1) {
  console.log('True');
} else {
  console.log('False');
}
