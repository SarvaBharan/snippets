function flatten(inp, prefix = "") {
  /* // Method 1: Using Object.keys
  let flatObj = {};
  Object.keys(inp).map((key) => {
    if (typeof inp[key] == "object") {
      const nestedFlatObj = flatten(inp[key], key + "_");
      Object.assign(flatObj, nestedFlatObj);
    } else {
      flatObj[prefix + key] = inp[key];
    }
  });
  return flatObj;*/
  // Method 2: Using Object.entries and reduce
  return Object.entries(inp).reduce((acc, arr) => {
    if (typeof arr[1] == "object") {
      const deepFlattened = flatten(arr[1], arr[0] + "_");
      Object.assign(acc, deepFlattened);
    } else {
      acc[prefix + arr[0]] = arr[1];
    }
    return acc;
  }, {});
}

const input = {
  a: 1,
  b: {
    ba: 21,
    bb: 22,
    bd: {
      bda: 241,
      bdb: 242,
    },
  },
  d: {
    da: 41,
  },
};

console.log(flatten(input));
