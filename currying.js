/**
 * The currying function allows you to partially apply arguments to a function and return a new
 * function that takes the remaining arguments.
 * @param fn - The `fn` parameter is a function that we want to curry.
 * @param args - The `args` parameter is a rest parameter that allows the function `currying` to accept
 * any number of arguments. These arguments will be stored in an array called `args`.
 * @returns The currying function returns a new function that takes additional arguments and calls the
 * original function with the combined arguments.
 */
function currying(fn, ...args) {
  return function (...arg) {
    return fn(...args, ...arg);
  };
}

const sum = (a, b, c) => a + b + c;
let add = currying(sum, 2);
console.log(add(4, 6));
console.log(add(6, 8));
