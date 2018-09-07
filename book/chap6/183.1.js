function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

var a = 10;
var b = 20;

console.log(add(a, b));

var nums = [a, b];

console.log(add(nums[0], nums[1]));
console.log(add(...nums));
// Spread Operator: 배열의 요소를 낱개로 쪼개서 처리한다.

// 위, 아래를 구분해야함

// Rest Parameter (나머지 파라미터)
// 할당하지 않고 남은 나머지 파라미터 값들을 모두 모아서 배열에 담고 그 배열을
// 변수 args에 할당한다.
// 파라미터 자리의 ...은 Rest Parameter 나머지는 Spread Operator
function Calculator(flag, ...args) {
  switch (flag) {
    case '+':
      return add(...args); // Spread Operator, 배열을 쪼개는 역할
    case '*':
      return multiply(...args); // Spread Operator
    default:
      return '잘못된 연산';
  }
}

console.log(Calculator('+', 2, 3, 4)); // 5
console.log(Calculator('*', 2, 3)); // 6
console.log(Calculator('-', 2, 3, 4, 5)); // 잘못된 연산