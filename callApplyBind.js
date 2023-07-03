const printDetails = function (gender, city) {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Gender: ${gender}, City: ${city}`
  );
};

const user1 = {
  name: "Nithin Kamath",
  age: 36,
};

const user2 = {
  name: "Kunal Shah",
  age: 40,
};

// call: the method with object as context and parameters gender & city for both users
printDetails.call(user1, "male", "Bangalore");

// apply: same functionality but takes an array of arguments instead of individual ones in a single parameter list
printDetails.apply(user2, ["male", "Delhi"]);

// bind: returns a new version of this function that when called will have its 'this' keyword bound to obj
let userFunction = printDetails.bind(user1, "male", "New York");
userFunction();
