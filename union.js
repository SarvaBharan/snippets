const union = (a, b) => Array.from(new Set([...a, ...b]));

console.log(union([1, 2, 5], [6, 3, 3]));
