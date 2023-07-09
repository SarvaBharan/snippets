function formatDuration(ms = 60000) {
  if (ms < 0) ms = -ms;
  let res = "";
  let time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  time = Object.entries(time);
  for ([key, value] of time) {
    if (value !== 0) {
      res += `${value} ${key} `;
    }
  }
  return res;
}

console.log(formatDuration(10240000));
