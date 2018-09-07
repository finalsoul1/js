const bruce = {
  name: "Bruce"
};
const madeline = {
  name: "Madeline"
};
// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
  return `Hello, I'm ${this.name}!`;
}
greet(); // "Hello, I'm !" - 'this' not bound
greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
greet.call(madeline); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

console.log('----------------------');

function update(birthYear, occupation) {
this.birthYear = birthYear;
this.occupation = occupation;
}

update(1949, 'singer');

// call(부르는객체, 파라미터, 파라미터)
update.call(bruce, 1949, 'singer'); 
// bruce is now { name: "Bruce", birthYear: 1949, occupation: "singer" }
update.call(madeline, 1942, 'actress');
// madeline is now { name: "Madeline", birthYear: 1942, occupation: "actress" }

console.log(bruce);
console.log(madeline);

// apply(부르는객체, [파라미터들]) // 배열을 낱개로 잘라서 파라미터로 전달함
update.apply(bruce, [1955, "actor"]); 
// bruce is now { name: "Bruce", birthYear: 1955,
// occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918,
// occupation: "writer" }

console.log(bruce);
console.log(madeline);

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15

console.log(Math.min(2, 3, -5));
console.log(Math.min(2, 3, -5, 15, 7));

console.log(Math.min.apply(null, arr)); // 배열로 값을 구해야하기 때문에 apply를 씀
console.log(Math.max.apply(null, arr));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)
// 스프래드 연산자 ...이 배열을 낱개로 쪼갬
Math.min(...arr); // -5
Math.max(...arr); // 15
console.log(Math.min(...arr));
console.log(Math.max(...arr));