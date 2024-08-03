const palindromes = function (myString) {
  const myReg = /[a-zA-Z]/g;
  if (
    myReg.test(myString[myString - 1]) &&
    myString[0] === myString[myString.length - 2]
  ) {
    return true;
  } else if (myString[0] === myString[myString.length - 1]) {
    return true;
  }
};

// Do not edit below this line
module.exports = palindromes;
