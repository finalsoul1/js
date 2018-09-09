// List<Integer> list = new ArrayList<Integer>();
// list.add(1); // auto-boxing
// list.add(new Integer(2)); // 이게 자동으로 위처럼
// list.add("Hi"); // <Integer>에선 안됨, 지네릭을 Object로 바꾸면 됨


var ary = [];

ary[0] = 1;
console.log(ary);

ary.push(2); // 맨 끝에 2를 추가해라
console.log(ary);

ary.push("Hi");
console.log(ary); // [1, 2, 'Hi']
