global.count = 100;

function increase() {
  this.count++;
  console.log('1 >>', this.count);
}

increase();

console.log('-----------------');

var obj = {
  count: 0,
  increase, // 함수 increase가 객체 obj의 멤버가 됨
  escalate() {
    this.count++;
    console.log('2 >>', this.count);
    
    function increase() {
      this.count++;
      console.log('3 >>', this.count);
      
      function lift() {
        this.count++;
        console.log('4 >>', this.count);
      }
      lift();
    }
    increase();
  }
}

obj.increase();

obj.escalate();
