const initArrayWithValues = (n = 2, val = 0) =>
  Array.from({ length: n }).fill(val);

console.log(initArrayWithValues(5, 3));
