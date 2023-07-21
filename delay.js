const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

delay(
  function (input) {
    console.log(input);
  },
  3000,
  "Done"
);
