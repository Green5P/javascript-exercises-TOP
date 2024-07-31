const sumAll = function (firstNumber, lastNumber) {
  let result = 0;
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
};

//
//
//
//
//
//
//
//
//
//
//
//
// Do not edit below this line
module.exports = sumAll;
