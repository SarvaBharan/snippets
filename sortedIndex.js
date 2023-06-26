const sortedIndex = (arr, numberToFit) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex((ele) =>
    isDescending ? numberToFit >= ele : numberToFit <= ele
  );
  return index === -1 ? arr.length : index;
};

console.log(sortedIndex([5, 4, 2, 1], 3));
