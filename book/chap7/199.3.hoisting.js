


(function() {
  var x;
  var x;
  let y;
  
  console.log(x);
  
  x = 10;
  x = 20;
  
  console.log(x);

  // console.log(y); 
  // TDZ : let, const은 초기화 전 사용할 수 없다.
  
  y = 100;
  
  console.log(y);

  z = 2000;
  console.log(z);
  console.log(global.z);

}());
