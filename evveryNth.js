const everyNth = (arr, n) =>
  arr.reduce((acc, val, i) => (i % n === n - 1 ? [...acc, val] : acc), []);

console.log(everyNth([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
