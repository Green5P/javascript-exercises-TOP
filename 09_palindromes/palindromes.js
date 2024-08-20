const palindromes = function (myString) {
  const myReg = /[a-zA-Z]/g;
  //
  trimS = myString.trim();

  // Gets the Midpoint of each string.
  if (trimS % 2 == 1) {
    center = (trimS.length - 1) / 2;
    firstPart = trimS.slice(0, center);
    secondPart = trimS.slice(center);
    for (let i = 0; i < center; i++) {
      if (firstPart[i] === secondPart[secondPart.length() - (i + 1)]) {
        return true;
      } else {
        return false;
      }
    }
  }
  //
  else if (trimS % 2 == 0) {
    center = (trimS.length - 2) / 2;
    firstPart = trimS.slice(0, center);
    secondPart = trimS.slice(center);
    for (let i = 0; i < center; i++) {
      if (firstPart[i] === secondPart[secondPart.length() - (i + 1)]) {
        return true;
      } else {
        return false;
      }
    }
  }

  // Tests if all characters of the string are alphabets
  // myReg.test(!myString[myString.length - (i + 1)]);
};

// Do not edit below this line
module.exports = palindromes;
