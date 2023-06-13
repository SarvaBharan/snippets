function isAnagram(str1, str2) {
  const sorted = (str) => str.toLowerCase().split("").sort().join("");
  return sorted(str1) === sorted(str2);
}

console.log(isAnagram("iceman", "cinema"));
