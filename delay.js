const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

console.log(
  delay(
    function (input) {
      console.log(input);
    },
    5000,
    "Done"
  )
);
