// function add(a, b) { // 함수, 메소드x
//   return a + b;
// }
// 
// const o = {
//   name: 'Julie',
//   greetBackwards: function() { // 함수, 메소드
// 
//     // 함수안에 함수 = 지역함수
//     function getReverseName() { // 함수, 메소드x
//       let nameBackwards = '';
//       for (let i = this.name.length - 1; i >= 0; i--) { // 
//         nameBackwards += this.name[i];
//       }
//       return nameBackwards;
//     }
// 
//     return `${getReverseName()} si eman ym ,olleH`;
//   },
// };
// o.greetBackwards();
// 메소드는 객체 프로퍼티를 this로 받지만 메소드가 아니면 global을 받음
console.log('----------------------------');

const o = {
  name: 'Julie',
  greetBackwards: function() {
    const self = this;

    function getReverseName() {
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
console.log(o.greetBackwards());