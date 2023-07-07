const str = "neccessary"; // ecce

function longestPalindrome(str) {
  let longest = "";
  let sliced = "";
  if (str.length <= 1) return str;
  let strArr = [...str];
  for (let i = 0; i < strArr.length; i++) {
    let firstIndex = str.indexOf(strArr[i]);
    let lastIndex = str.lastIndexOf(strArr[i]);
    if (firstIndex && lastIndex !== -1) {
      sliced = str.slice(firstIndex, lastIndex + 1);
      if (isPalindrome(sliced) && sliced.length > longest.length)
        longest = sliced;
    }
  }
  return longest;
}

function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

console.log(longestPalindrome(str));
