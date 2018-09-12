const input = "As I was going to Saint Ives";

const re = /\w{3,}/ig;

// 스트링객체가 갖고있는 함수를 쓸 수 있다.
let word = input.match(re); // ["was", "going", "Saint", "Ives"]
console.log(word); // 배열로 리턴

input.search(re); // 5 (the first three-letter word starts at index 5)


// starting with the regex (re), 정규표현식객체.test
word = re.test(input); // true (input contains at least one three-letter word)
console.log(word);

re.exec(input); // ["was"] (first match)
re.exec(input); // ["going"] (exec "remembers" where it is)
re.exec(input); // ["Saint"]
re.exec(input); // ["Ives"]
re.exec(input); // null -- no more matches
// 정규표현식 옵션에 m이 붙어있으면 문단끝까지 검색한다.

// note that any of these methods can be used directly with a regex literal
input.match(/\w{3,}/ig);
input.search(/\w{3,}/ig);
/\w{3,}/ig.test(input);
/\w{3,}/ig.exec(input);