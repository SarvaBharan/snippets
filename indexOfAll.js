const indexOfAll = (arr, val) =>
  arr.reduce((acc, ele, i) => {
    if (ele === val) {
      acc.push(i);
    }
    return acc;
  }, []);
console.log(indexOfAll([1, 2, 3, 1, 4, 5, 1], 1));
