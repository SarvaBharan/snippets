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
console.log(renameKeys({ name: "firstName", job: "passion" }, obj));
