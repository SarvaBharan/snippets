/**
 * The `renameKeys` function takes in an object with key-value pairs representing renaming rules and
 * another object, and returns a new object with keys renamed according to the rules.
 * @param renameObj - An object that maps keys from the original object to their new names.
 * @param obj - The `obj` parameter is an object that you want to rename the keys of.
 * @returns The `renameKeys` function returns a new object with the keys renamed according to the
 * `renameObj` parameter.
 */
const renameKeys = (renameObj, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [renameObj[key] || key]: obj[key] },
    }),
    {}
  );
};

const obj = { name: "Chethan", job: "Software Engineer" };
console.log(renameKeys({ name: "firstName", job: "passion" }, obj)); // { firstName: 'Chethan', passion: 'Software Engineer' }
