const getType = (val) =>
  val === undefined
    ? "undefined"
    : val === null
    ? "null"
    : val.constructor.name;

console.log(getType(new Map()));
