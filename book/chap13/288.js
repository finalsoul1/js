/*
  Recursion: 함수 내 로직이 자신을 다시 호출하는 로직
  메소드를 호출할때마다 새로운 메모리영역에 생성됨
*/

// 4! = 4 * 3 * 2 * 1
function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}
/*
        n       return
  1     4       4 * fact(3)
  2     3       3 * fact(2)
  3     2       2 * fact(1)
  4     1       1
  
  각 함수의 메모리영역이 다름.
  가장 마지막에 호출된 함수부터 리턴값을 호출한지역으로 리턴하며
  삭제되며 거꾸로 처리됨.
*/

var result1 = fact(4);
console.log(result1);