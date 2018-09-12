const EventEmitter = require('events').EventEmitter; // EventEmitter 프로퍼티

function Counter(max) {
  this.start = function() {
    this.emit('start'); 
    
    max--;
    this.emit('count', max);
  };
}


Counter.prototype.__proto__ = EventEmitter.prototype;

let counter = new Counter(5);

counter.on('start', function() {
  console.log('START');
});

// EventEmitter는 event의 중계자다.
// EventEmitter를 통해 emit의 두번째 파라미터가 on함수로 저장해둔 
// 콜백함수에게 전달됨
counter.on('count', function(val) { 
  console.log('val = ' + val);
});


counter.start();