const sumAll = function (firstNumber, lastNumber) {
  let result = 0;
  if (firstNumber < 0 || lastNumber < 0) {
    return "ERROR";
  } else if (firstNumber % 1 != 0 || lastNumber % 1 != 0) {
    return "ERROR";
  } else {
    if (firstNumber > lastNumber) {
      for (let i = lastNumber; i <= firstNumber; i++) {
        result += i;
      }
      return (sum = result);
    } else {
      for (let i = firstNumber; i <= lastNumber; i++) {
        result += i;
      }
    }

    return (sum = result);
  }
};

// Do not edit below this line
module.exports = sumAll;
