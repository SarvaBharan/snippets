const memoize = (fn) => {
  let cached = {};
  return function (...args) {
    let key = String(args);
    if (key in cached) return cached[key];
    let res = fn(args);
    cached[key] = res;
    return res;
  };
};
