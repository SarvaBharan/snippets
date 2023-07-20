const deepFlatten = (arr) =>
  [].concat(...arr.map((ele) => (Array.isArray(ele) ? deepFlatten(ele) : ele)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
