const countOccurrences = (arr, ele) => {
  return arr.reduce((acc, val) => {
    if (val === ele) acc++;
    return acc;
  }, 0);
};

console.log(countOccurrences([1, 2, 3, 4, 5, 5, 6, 7, 5, 7, 8, 9, 10], 7));
