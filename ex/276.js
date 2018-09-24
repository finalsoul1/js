function getRainbowIterator() {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ];
  let colorIndex = -1;
  return {
    next() { // 이터레이터 프로토콜
      if (++colorIndex >= colors.length)
        colorIndex = 0;
      return {value: colors[colorIndex], done: false};
    }
  };
}

const it = getRainbowIterator();

console.log(it.next());


/*
이터러블
Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현해야 한다.
배열에는 Array.prototype[Symbol.iterator] 메소드가 구현되어 있다.
*/
const ary = [1, 2, 3];

/*
이터레이터
이터러블의 Symbol.iterator를 프로퍼티 키로 사용한 메소드는 이터레이터를 반환한다.
*/
const ary2 = ary[Symbol.iterator]();

/*
이터레이터는 순회 가능한 자료 구조인 이터러블의 요소를 탐색하기 위한 포인터로서
value, done 프로퍼티를 갖는 객체를 반환하는 next() 함수를 메소드로 갖는 객체이다.
이터레이터의 next() 메소드를 통해 이터러블 객체를 순회할 수 있다.
*/
console.log(ary2.next());
