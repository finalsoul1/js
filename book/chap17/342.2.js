function log(data) {
  console.log(data);
}

log('hello world'.replace('world', 'javascript'));

log('Blue has a blue house and a blue car'.replace('blue', 'red'));
// replace 함수는 한개만 바꿈

log('Blue has a blue house and a blue car'.replace(/blue/g, 'red'));

// | or 조건
// 대상을 찾아서 함수의 파라미터x에 전달하고 함수가 리턴하는
// 값을 바꿔치기 용도로 사용하라.
log('Blue has a blue house and a blue car'
  .replace(/blue|house|car/gi, function myFunction(x) {
      return x.toUpperCase();
  }));

log('hello'.replace(/h/, 'b'));

log('hello'.replace(/h../, 'bbb'));

