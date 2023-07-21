function formatDuration(ms = 60000) {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hour: Math.floor(ms / (1000 * 60 * 60)) % 24,
    minute: Math.floor(ms / (1000 * 60)) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  /* // Method #1
  let res = "";
  time = Object.entries(time);
  for ([key, value] of time) {
    if (value !== 0) {
      res += `${value} ${key} `;
    }
  }
  return res;
  */
  //Method#2
  return Object.entries(time)
    .filter((value) => value[1] !== 0)
    .map(([key, value]) => `${value} ${key}${value > 1 ? "s" : ""}`)
    .join(", ");
}

console.log(formatDuration(10240000));
