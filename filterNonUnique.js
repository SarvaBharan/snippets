function filterNonUnique(arr) {
  return arr.filter((ele) => arr.indexOf(ele) === arr.lastIndexOf(ele));
}

console.log(filterNonUnique([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7]));
