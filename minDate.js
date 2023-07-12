const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
console.log(minDate(array)); // 2016-01-08T18:30:00.000Z
