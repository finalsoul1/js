const cook = {
  name: "Walt",
  redPhosphorus: 100, // dangerous
  water: 500, // safe
};

let count = 0;

const protectedCook = new Proxy(cook, {
  // Set Trap
  // target: 원본, key:프로퍼티, value: 새로 바꾸고자 하는 값
  set(target, key, value) {
  console.log('count = ', ++count);
    if (key === 'redPhosphorus') {
      if (target.allowDangerousOperations)
        return target.redPhosphorus = value;
      else
        return console.log("Too dangerous!");
    }
    // all other properties are safe
    target[key] = value;
  },
});

protectedCook.water = 550; // 550
console.log(cook);

protectedCook.redPhosphorus = 150; // Too dangerous!
console.log(cook);

protectedCook.allowDangerousOperations = true;
console.log(cook);

protectedCook.redPhosphorus = 150; // 150
console.log(cook);

