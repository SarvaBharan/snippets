const truncate = (str, len) => {
  return str.length > len
    ? str.slice(0, len > 3 ? len - 3 : len).concat("...")
    : str;
};

console.log(truncate("JavaScript", 8));
