const size = (data) => {
  return Array.isArray(data)
    ? data.length
    : typeof data == "object"
    ? Object.keys(data).length
    : data.length;
};

console.log(size([1, 2, 3, 4, 5])); // 5
console.log(size("size")); // 4
console.log(size({ a: 3, c: 6, b: 9 })); // 3
