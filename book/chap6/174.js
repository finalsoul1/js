// 새로운 문법을 배울 때 그 문법을 이해했는가?
// 쉽게 판단하는 기준은 : 신규 문법을 옛 문법으로 바꿔보자

// 객체하나를 받아야되는데 바로 프로퍼티를 따로받아서 집어넣음
function getSentence( {subject, verb, object} ) {
  // 키:밸류 형태가 아님 객체x, 해체할당 문법.
  return `${subject} ${verb} ${object}`; // ``안은 문자열 공간, 안에 ${변수} 라는 의미
}

// function getSentence(obj) {
//   var subject = obj.subject;
//   var verb = obj.verb;
//   var object = obj.object;
//
//   return subject + ' ' + verb + ' ' + object;
// }

// 최신문법 학습 >> 구 문법으로 변경 >> 최신문법으로 변경

const o = {
  subject: "I",
  verb: "love",
  object: "JavaScript",
};
getSentence(o); // "I love JavaScript"
console.log(getSentence.call(o));
console.log(o);

console.log('------1-------');



function addPrefix(prefix, ...words) {
  // we will learn a better way to do this later!
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}
addPrefix("con", "verse", "vex"); // ["converse", "convex"]
console.log(addPrefix("con", "verse", "vex"));
