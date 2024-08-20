const palindromes = function (myString) {
  const myReg = /[a-zA-Z]/g;
  let result = 0;
  //
  trimS = myString.trim().toUpperCase();
  trimmedS = trimS.length;

  // Gets the Midpoint of each string.
  if (trimmedS % 2 == 1) {
    center = (trimS.length - 1) / 2;
    firstPart = myReg.test(!trimS.slice(0, center));
    secondPart = myReg.test(!trimS.slice(center));
    for (let i = 0; i < center; i++) {
      if (firstPart[i] === secondPart[secondPart.length - (i + 1)]) {
        result += 1;
      } else {
        result = 0;
      }
    }
    if (result >= 1) {
      return true;
    }
  }
  //
  else if (trimmedS % 2 == 0) {
    center = (trimS.length - 2) / 2;
    //
    // Tests if all characters of the string are alphabets
    // myReg.test(!****);
    //
    firstPart = myReg.test(!trimS.slice(0, center));
    secondPart = myReg.test(!trimS.slice(center));
    for (let i = 0; i < center; i++) {
      if (firstPart[i] === secondPart[secondPart.length - (i + 1)]) {
        result += 1;
      } else {
        result = 0;
      }
    }
    if (result >= 1) {
      return true;
    }
  }
};

// Do not edit below this line
module.exports = palindromes;
