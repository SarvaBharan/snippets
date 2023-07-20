// Method 1:
/* const deepFlatten = (arr) =>
  [].concat(...arr.map((ele) => (Array.isArray(ele) ? deepFlatten(ele) : ele)));
*/

// Method 2:
const deepFlatten = (arr) =>
  arr.reduce(
    (res, ele) => res.concat(!Array.isArray(ele) ? ele : deepFlatten(ele)),
    []
  );
console.log(deepFlatten([1, [2], [[3], 4], 5])); // [1,2,3,4,5]
