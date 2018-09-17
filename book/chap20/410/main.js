const debug = require('./debug')('main'); // note that we immediately call the
// function that the module returns
// exports한게 함수면 바로 파라미터를 부여해서 리턴값을 변수에 부여할 수 있다.

debug("starting"); // will log "main starting +0ms"
// if debugging is enabled

let sum = 0;
for (var i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log(sum);

debug("END");