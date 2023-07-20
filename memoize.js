/**
 * The `memoize` function is a higher-order function that caches the results of a given function and
 * returns the cached result if the same arguments are provided again.
 * @param fn - The `fn` parameter is a function that we want to memoize.
 * @returns The memoize function returns a new function that acts as a memoized version of the original
 * function passed as an argument.
 */
const memoize = (fn) => {
  let cached = {},
    cacheFetchCount = 0,
    res = {};
  return function (...args) {
    let key = String(args);
    if (key in cached) {
      res["cacheFetched"] = ++cacheFetchCount;
      res[args] = cached[key];
      return res;
    }
    let res = fn(...args);
    cached[key] = res;
    res["cacheFetched"] = cacheFetchCount;
    res[args] = cached[key];
    return res;
  };
};

const sum = (a, b) => a + b;
let memoizedFn = memoize(sum);
console.log(memoizedFn(5, 6));
console.log(memoizedFn(5, 6));
console.log(memoizedFn(5, 6));
console.log(memoizedFn(6, 6));
console.log(memoizedFn(6, 6));
