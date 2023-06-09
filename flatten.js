function flatten(arr, depth = 1) {
  return arr.reduce((acc, val, i) => {
    return acc.concat(
      depth > 1 && Array.isArray(val) ? flatten(val, depth - 1) : val
    );
  }, []);
}

console.log(flatten([1, [2], 3, 4]));
console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 3));
