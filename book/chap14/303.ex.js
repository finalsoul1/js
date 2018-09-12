const EventEmitter = require('events').EventEmitter; // EventEmitter 프로퍼티

function Counter(max) {
  this.start = function() {
    this.emit('start');
    let self = this;
    let intervalId = setInterval(() => {
      max--;
      self.emit('count', max);

      if (max <= 0) { // 카운트가 0이 되면 반복탈출
        clearInterval(intervalId);
      }
    }, 1000);
  };
}


Counter.prototype.__proto__ = EventEmitter.prototype;

let counter = new Counter(5);

counter.on('start', function() {
  console.log('START');
});

counter.on('count', function(val) {
  console.log('val = ' + val);
});

counter.start();