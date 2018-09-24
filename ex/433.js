const arr = [3, 1.5, 9, 2, 5.2];

// defineProperty (단수, 복수 구별)
Object.defineProperties(arr, {
  sum: {
    value: function() {
      return this.reduce((a, x) => a + x);
    },
    enumerable: true
  },
  avg: {
    value: function() {
      return this.sum() / this.length;
    },
    enumerable: true
  }
});

console.log(arr);
