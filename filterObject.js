const data = [
  {
    id: 1,
    name: "John",
    age: 18,
  },
  {
    id: 2,
    name: "Cena",
    age: 40,
  },
];

function filterObj(data, keys, fn) {
  return data.filter(fn).map((obj) => {
    return keys.reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
  });
}
console.log(filterObj(data, ["name", "age"], (item) => item.age > 20));
