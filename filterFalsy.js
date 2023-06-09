const filterFalsy = (arr) => arr.filter(Boolean);

console.log(filterFalsy([true, false, "some string", 0, 1, {}, [], !true]));
