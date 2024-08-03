const palindromes = function (myString) {
  const myReg = /[a-zA-Z]/g;
  if (
    myReg.test(
      myString[myString.length - 1]
    ) /* myReg.test(char) is used to check if char is the regular expression 'myReg' */ &&
    myString[0] === myString[myString.length - 1] // Compares if the last character in the string is thesame as the first.
  ) {
    return true;
  } else if (
    myReg.test(!myString[myString.length - 1]) &&
    myString[0] === myString[myString.length - 2] // Compares if the last character in the string is thesame as the first.
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
