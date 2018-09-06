

function add(a, b) {
  return a + b;
} // 죽은 코드, 파라미터도 안보고 이름같으면 끝임

function add(a, b, c) {
  return a * b;
}

console.log(add(2, 3));
console.log(add(2, 3));
console.log(add(2, 3));

function Car() {
  this.color = "white";
}

// 
