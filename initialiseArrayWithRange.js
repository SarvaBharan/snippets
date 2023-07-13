const initArrayWithRange = (n, steps = 2) => {
  return Array.from(
    {
      length: Math.ceil(n + 1 / steps),
    },
    (v, i) => i * steps
  );
};

console.log(initArrayWithRange(5));
