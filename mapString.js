const mapString = (str, fn) => {
  return str
    .split("")
    .map((ch, i, str) => fn(ch, i, str))
    .join("");
};

console.log(mapString("We are aliens!", (ch) => ch.toUpperCase()));
