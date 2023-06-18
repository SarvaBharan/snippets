const strArr = ["abbcdcdfcedxyz", "abbcdcdfced", "abbcdcdfcxyz"];

function longestSubString(strArr) {
  return strArr.map((ele) => {
    let longest = [];
    let temp = [];
    ele.split("").map((ch) => {
      if (!longest.includes(ch)) {
        longest.push(ch);
      } else {
        if (temp.length < longest.length) temp = longest;
        longest = longest.slice(-1);
        if (longest[0] !== ch) longest.push(ch);
      }
    });
    longest = temp.length > longest.length ? temp : longest;
    return longest.join("");
  });
}

console.log(longestSubString(strArr));
