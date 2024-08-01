const sumAll = function (firstNumber, lastNumber) {
  let result = 0;

  // Returns error when number is negative
  if (firstNumber < 0 || lastNumber < 0) {
    return "ERROR";
    //
    //
    // Returns error when number is not an integer but a decimal...
  } else if (firstNumber % 1 != 0 || lastNumber % 1 != 0) {
    return "ERROR";
  } else if (
    // Returns error if number in not a number parameter e.g '9', [4,5]
    typeof firstNumber !== "number" ||
    typeof lastNumber !== "number"
  ) {
    return "ERROR";
  } else {
    //
    //
    // Adds all numbers between two given numbers using a for loop if First number if greater than Last number.
    if (firstNumber > lastNumber) {
      for (let i = lastNumber; i <= firstNumber; i++) {
        result += i;
      }
      return (sum = result);
    } else {
      // Adds all numbers between two given numbers using a for loop if First number if greater than Last number.
      for (let i = firstNumber; i <= lastNumber; i++) {
        result += i;
      }
    }

    return (sum = result);
  }
};

// Do not edit below this line
module.exports = sumAll;
