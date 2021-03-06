/*
  콜백의 헬을 해결하기 위한 시도, 여러 레벨의 들여쓰기로 인한
  난독증을 해결하기 위해서 프라미스를 사용하면 들여쓰기 레벨이
  1레벨로 축소됩니다.
  코드 평탄화 기술
*/
// 문법이니 외워라
let promise = new Promise(function (resolve, reject) {
  if (true) {
    // 로직 처리 성공
    resolve('처리 결과');
  } else {
    // 로직 처리 실패(에러 발생)
    reject(new Error('실패 사유'))
  }
});

promise.then(function (result) { // 성공 콜백
  
}).catch(function(error) { // 실패 콜백
  
}).finally(function() { // 최후의 항상 작동하는 콜백
  
});
//여기까지 통채로 외우자


function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    
    for (let i = seconds; i >= 0; i--) {
      
      setTimeout(function() { // jshint ignore:line
        if (i > 0) console.log(i + '...');
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000);
    }
  });
}