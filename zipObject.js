/**
 * The zipObject function takes two arrays and returns the mapped object
 * @param keys
 * @param values
 * @returns object
 */
const zipObject = (keys, values) => {
  return keys.reduce((acc, key, i) => {
    acc[key] = values[i];
    return acc;
  }, {});
};

console.log(zipObject(["x", "y", "z"], [4, 5, 6]));
