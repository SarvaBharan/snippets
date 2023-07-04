const mask = (str, maskFrom, maskWith = "*") => {
  let len = str.length;
  return [...str].fill(maskWith, maskFrom).join("");
};

console.log(mask("1234567890", 4, "$"));
