const forEachRight = (arr, fn) => arr.slice(0).reverse().forEach(fn); // slice to clone the array

console.log(forEachRight([1, 2, 3, 4, 5], (item) => console.log(item * 2)));
