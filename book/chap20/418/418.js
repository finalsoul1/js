// req + 엔터
// 기동 파일에서 환경변수 정보를 작동시킨다.
require('./config');

// console.log(process.env);

const debug = process.env.DEBUG === "1" ? console.log : function() {};

debug("Visible only if environment variable DEBUG is set!");

// cmd => set 환경변수(키: 밸류)
// 환경변수 변경가능

/*
set DEBUG=1
node 418.js
Visible only if environment variable DEBUG is set!
set DEBUG=0
node 418.js

*/