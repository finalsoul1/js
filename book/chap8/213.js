class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;

const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");

console.log(jamie);
console.log(juliet);
console.log(peter);
console.log(jay);
  
console.log('---------------');
  
const arr = [jamie, juliet, peter, jay];
// option 1: direct comparison of ID:
var ret = arr.find(p => p.id === juliet.id); // returns juliet object
console.log(ret);

// option 2: using "this" arg:
ret = arr.find(p => p.id === this.id, juliet); // returns juliet object
// 이 함수에서 사용하는 this를 내가 주는 객체로 써라
console.log(ret);

console.log('-------------------');

// 조건에 맞는 요소를 찾으면 검색을 멈추고 true를 반환
ret = arr.some(item => item.name.includes('J'));
console.log(ret);

console.log('-------------------');

// 배열의 모든 요소가 조건에 맞아야 true를 반환하며 그렇지 않다면 false 반환
ret = arr.every(item => item.name.includes('J'));
console.log(ret);
