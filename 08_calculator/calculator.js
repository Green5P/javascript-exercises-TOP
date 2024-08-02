const add = function (firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
};

const subtract = function (firstNumber, secondNumber) {
  let diference = firstNumber - secondNumber;
  return diference;
};

const sum = function (myArray) {
  // if (myArray == []) {
  //   return 0;
  // }
  let sum = 0;
  for (let i = 0; i < myArray.length - 1; i++) {
    sum += myArray[i];
  }
  return sum;
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
