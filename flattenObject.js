function flatten(inp, prefix = "") {
  let flatObj = {};
  Object.keys(inp).map((key) => {
    if (typeof inp[key] == "object") {
      const nestedFlatObj = flatten(inp[key], key + "_");
      Object.assign(flatObj, nestedFlatObj);
    } else {
      flatObj[prefix + key] = inp[key];
    }
  });
  return flatObj;
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
