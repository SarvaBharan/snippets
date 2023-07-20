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
    val = {};
  return function (...args) {
    let key = String(args);
    if (key in cached) {
      val["cacheFetched"] = ++cacheFetchCount;
      val[fn] = cached[key];
      return val;
    }
    let res = fn(...args);
    cached[key] = res;
    val["cacheFetched"] = cacheFetchCount;
    val[fn] = cached[key];
    return val;
  };
};

const sum = (a, b) => a + b;
let memoizedFn = memoize(sum);
console.log(memoizedFn(5, 6));
console.log(memoizedFn(5, 6));
console.log(memoizedFn(5, 6));
console.log(memoizedFn(6, 6));
console.log(memoizedFn(6, 6));
