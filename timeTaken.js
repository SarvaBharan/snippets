function timeTaken(cb) {
  console.time("timeTaken");
  const res = cb();
  console.timeEnd("timeTaken");
  return res;
}

console.log(timeTaken(() => Math.pow(2, 1000)));
