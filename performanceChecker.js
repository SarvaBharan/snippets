function fillIn(len) {
  let filled = [];
  for (let i = 0; i < len; i++) {
    filled.push(i);
  }
  return filled;
}

const mostPerformant = (fns, iters = 50000) => {
  const times = fns.map((fn) => {
    const before = Date.now();
    for (let i = 0; i < iters; i++) fn();
    return Date.now() - before;
  });
  return times.indexOf(Math.min(...times));
};

console.info(
  mostPerformant([
    () => {
      fillIn(10).filter((el) => el % 2 !== 0);
    },
    () => {
      fillIn(10).filter((el) => el % 2 === 0);
    },
  ])
); // 1
