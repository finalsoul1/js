function getSentence({sub, vab, obj}){
  return sub+vab+obj;
}

var oo = {
  sub:10,
  vab:2,
  obj:44,
}

console.log(getSentence(oo));
