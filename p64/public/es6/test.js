'use strict';
// es6 기능 : 블록 스코프 변수 선언

// es6 기능 : 객체 분해
function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}.`);
}

const sentences = [
  {subject:'I', verb:'love', object:'you'},
  {subject:'You', verb:'love', object:'me'},
];

for (let s of sentences) {
  say(s);
}