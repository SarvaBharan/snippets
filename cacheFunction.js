/*
const memoize = (fn) => {
  let cacheObj = new Map();
  let cached = function (val) {
    return cacheObj.has(val)
      ? cacheObj.get(val)
      : cacheObj.set(val, fn.call(this, val)) && cacheObj.get(val);
  };
  cached.cacheObj = cacheObj;
  return cacheObj;
};
*/

function fib(n, memo) {
  memo = memo || {};
  if (memo[n]) return memo[n];
  if (n < 2) return n;
  return (memo[n] = fib(n - 2, memo) + fib(n - 1, memo));
}

console.log(fib(8));
console.log(fib(8));
