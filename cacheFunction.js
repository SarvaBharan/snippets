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
