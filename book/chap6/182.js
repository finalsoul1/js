const o = {
  name: 'Julie',
  greetBackwards: function() {
    
    // const self = this;
    // 
    // function getReverseName() {
    //   let nameBackwards = '';
    //   for (let i = self.name.length - 1; i >= 0; i--) {
    //     nameBackwards += self.name[i];
    //   }
    //   return nameBackwards;
    // }
    
    const getReverseName = () => { 
      // => 로 만든 함수는 지역함수에도 불구하고 메소드의 this와 같이 씀
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
console.log(o.greetBackwards());
