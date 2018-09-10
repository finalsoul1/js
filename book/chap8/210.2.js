var arr = [4, 10, 7, 100, 25, 34, 21, 79];

// 가장 작은 숫자를 출력하세요
console.log(arr.sort((a, b)=>a > b)[0]);


// 가장 큰 숫자를 출력하세요
console.log(arr.sort((a, b)=>a < b)[0]);

var people = [
    {id: 30, name: 'Brad', age: 45},
    {id: 20, name: 'Tom', age: 34},
    {id: 40, name: 'Iaan', age: 64},
    {id: 10, name: 'Aaron', age: 18},
];

// id 오름차순
people.sort((a, b)=>a.id > b.id);
console.log('id 오름차순',people);

// 나이 오름차순
console.log(people.sort((a, b)=>a.age > b.age)[0].name);

// name 내림차순
people.sort((a, b)=>a.name < b.name);
console.log('이름 내림차순',people);