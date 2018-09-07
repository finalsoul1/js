// function foo() {
// 
//   console.log(this === foo);
// 
//   var fn = function() {
//     console.log(this.a);
//   };
// 
//   // fnBind 함수 내에 this는 foo로 고정된 상태다
//   var fnBind = fn.bind(this); // 함수를 호출하지는 않지만 this를 주면서 고정
//   setTimeout(fnBind, 100);
// }
// 
// foo.a = 'foo.a';
// 
// foo.call(foo);

function foo() {
  
  console.log(this === foo);

  
  // fnBind 함수 내에 this는 foo로 고정된 상태다
  setTimeout((function() {
    console.log(this.a);
  }).bind(this), 100);
}

foo.a = 'foo.a';

foo.call(foo);