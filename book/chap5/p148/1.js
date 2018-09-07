console.log(0.1 + 0.1);
console.log(0.1 + 0.2);
console.log(0.1 + 0.3);
console.log('---------');


// let n = 0;
// 
// while (true) {
//   n += 0.1;
//   console.log('n=', n);
//   if (n === 0.3) break;
// }
// 
// console.log(`Stopped at ${n}`);

const x = 0.2, y = 0.3, z = 0.1;
let result = x - y + z;
console.log('result=',result);

let equal = (Math.abs(x - y + z) < Number.EPSILON);


let n = 0;
while (true) {
  n += 0.1;
  //   if (n === 0.3) break;
  if (Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);