
const o = {
  name: 'Wallace',
  speak() {
    return `My name is ${this.name}!`;
  },
};

console.log(o.speak()); // "My name is Wallace!

const speak = o.speak;
speak === o.speak; // true; both variables refer to the same function
speak();

global.name = "잘못오셨어요";

console.log(speak === o.speak);
console.log(speak());
