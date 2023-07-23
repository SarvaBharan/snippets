const chunk = (arr, size) => {
  return arr.reduce((resArr, ele) => {
    const lastChunk = resArr[resArr.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      resArr.push([ele]);
    } else {
      lastChunk.push(ele);
    }
    return resArr;
  }, []);
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
