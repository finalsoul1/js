function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// a@naver.com
// b@gmail.com
// 2322@naver.com
// 232332@hanmail.net

console.log(validateEmail('a@naver.com'));
console.log(validateEmail('2322@naver.com'));
console.log(validateEmail('@gmail.com'));
console.log(validateEmail('232332@hanmail.net'));