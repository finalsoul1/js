const obj = {foo:"bar"};
var a = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(a);
