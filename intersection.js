function intersection(a, b) {
  const unique = new Set(b);
  return a.filter((ele) => unique.has(ele));
}

console.log(intersection([1, 2, 3], [2, 1, 3, 4]));
