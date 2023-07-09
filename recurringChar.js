const str = "acbbac";

const recurringChar = (s) => {
  return [...s].filter((ch, i) => ch == s[i + 1])[0].toString();
};

console.log(recurringChar(str));
