function* rainbow() {
  yield 'red'
  yield 'orange'
  yield 'yellow'
  yield 'green'
  yield 'blue'
  yield 'indigo'
  yield 'violet'
}

const it = rainbow();

console.log('next : ', it.next());

for (let color of rainbow()) {
  console.log(color);
}

console.log('-----------------');

function* interrogate() {
  const name = yield "What is your name?";
  const color = yield "What is your favorite color?";
  return `${name}'s favorite color is ${color}.`;
}

const it2 = interrogate();

console.log(it2.next());
console.log(it2.next('Ethan'));
console.log(it2.next('Orange'));

const it3 = interrogate();

for (let i of it3) {
  console.log(i);
}
