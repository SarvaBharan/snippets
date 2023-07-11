function currying(fn, ...args) {
  return function (...arg) {
    return fn(...args, ...arg);
  };
}

const sum = (a, b, c) => a + b + c;
let add = currying(sum, 2);
console.log(add(4, 6));
console.log(add(6, 8));
