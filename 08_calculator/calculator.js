const add = function (firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
};

const subtract = function (firstNumber, secondNumber) {
  let diference = firstNumber - secondNumber;
  return diference;
};

const sum = function (myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  return sum;
};

const multiply = function (myArray) {
  let product = 1;
  for (let i = 0; i < myArray.length; i++) {
    product *= myArray[i];
  }
  return product;
};

const power = function (number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function (number) {
  let result = 1;
  if (number == 0 || number == 1) {
    return 1;
  } else {
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
