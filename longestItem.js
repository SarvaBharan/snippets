const longestItem = (...args) =>
  console.log(args.reduce((acc, val) => (val.length > acc.length ? val : acc)));

longestItem("this", "is", "a", "testcase");
longestItem(...["a", "ab", "abc"]);
longestItem(...["a", "ab", "abc"], "abcd");
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]);
longestItem([1, 2, 3], "foobar");
