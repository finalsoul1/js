const beer99 = "99. bottles of beer on the wall " +
  "take 1d down and pass it a222round --// " +
  "98sss. bottles of d1beer 3s on the wall!!";

/*
  정규표현식이 기호를 다른 의미로 정해서 사용하면 그 기호를 문자열로
  찾아달라고 할때 추가적인 설정이 필요합니다.
  escape문자 \ 역슬래쉬+기호를 사용하면 정규표현식 설정이 아니라 그냥 문자열로
  취급됩니다.
*/

// const match = beer99.match(/[0-9a-z" "!]/ig);

// const match = beer99.match(/\//ig);

// const match = beer99.match(/./ig); // 공백 포함 모든 글자

// const match = beer99.match(/-|0|1|2|3/ig);

// const match = beer99.match(/[-0-3]/ig);

// const match = beer99.match(/[\-0-9a-z.]/ig);

// /./은 공백포함모든글자, [.]은 그냥 .임
// ~~~.은 뒤에 한글자 포함이라는 뜻임
const match = beer99.match(/\d{1,3}./ig);

console.log(match);

