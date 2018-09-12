// 노드가 제공하는 require 함수를 사용하면
// 다른 ~.js 파일이나 node_mudules 폴더 밑에 설치한 
// 프로그램 또는 노드가 기본적으로 제공하는 내장 모듈이 
// 제공하는 객체를 획득할 수 있습니다.
const EventEmitter = require('events').EventEmitter; // EventEmitter 프로퍼티

function Counter() {
  this.start = function() {
    this.emit('start'); // counter.emit('start'); 
    // 할아버지한테 있는 emit함수를 사용하겠다.
    
  };
}

// 상속 설정
Counter.prototype.__proto__ = EventEmitter.prototype;
// __proto__: 부모를 연결함

// console.log(Object.keys(EventEmitter.prototype));

let counter = new Counter();
// console.log(counter);

// emitter.on(eventName, listener)
// EventEmitter.prototype에 있는 함수on (문자열, 함수) 파라미터를 받음
// on함수로 이벤트에미터에게 누군가가 나중에 
// 'start' 라는 문자열로 신호를 보내거든 같이 전달하는 
// 콜백 함수를 호출해달라고 미리 신청합니다.
// emit으로 짝지 문자열을 통해 콜백 함수를 호출
counter.on('start', function() {
  console.log('START');
});

counter.start();