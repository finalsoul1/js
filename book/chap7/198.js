// class Counter {
//   private int count = 0;
// 
//   public String increment(){
//     return ++count + "time(s).";
//   }
// }
// 
// Counter counter = new Counter();
// System.out.println(counter.increment());
// System.out.println(counter.increment());

const f = (function() {
  let count = 0;
  return function increment() { // 함수 이름을 붙여도 쓸일이 없기 때문에 생략가능
    return `I have been called ${++count} time(s).`;
  }
})();
console.log(f());

const e = function() {
  let count = 0;
  return function increment() { // 함수 이름을 붙여도 쓸일이 없기 때문에 생략가능
    return `I have been called ${++count} time(s).`;
  }
};
console.log(e()); // IIFE로 안하면 성립안됨