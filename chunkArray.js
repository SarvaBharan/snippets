/**
 * The `chunk` function takes an array and a size as input and returns a new array with subarrays of
 * the specified size.
 * @param arr - The `arr` parameter is an array that we want to split into smaller chunks.
 * @param size - The `size` parameter in the `chunk` function represents the desired size of each chunk
 * or subarray. It determines how many elements from the original array should be grouped together in
 * each chunk.
 * @returns The `chunk` function returns an array of arrays, where each inner array contains `size`
 * number of elements from the original `arr`.
 */
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
