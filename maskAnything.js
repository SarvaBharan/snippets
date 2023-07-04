const maskLast = (str, maskFrom, maskWith = "*") => {
  return [...str].fill(maskWith, maskFrom).join("");
};

const maskFirst = (str, maskFrom, maskWith = "*") => {
  const len = str.length;
  return `${str}`.slice(-maskFrom).padStart(len, maskWith);
};

console.log(maskLast("1234567890", 4, "$"));
console.log(maskFirst("1234567890", 4, "$"));
