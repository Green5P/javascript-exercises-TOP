const palindromes = function (myString) {
  // Regular expression to match alphanumeric characters
  myReg = /[a-zA-Z0-9]/g;

  // Trim the string and convert to uppercase
  trimmedString = myString.trim().toUpperCase();

  // Filter out non-alphanumeric characters
  trimS = trimmedString.match(myReg).join("");

  // Reverse the filtered string
  reversedString = trimS.split("").reverse().join("");

  // Compares Original String and Reversed String.
  if (trimS === reversedString) {
    return true;
  } else {
    return false;
  }
  // This only works for the first 5 test steps
  /*
  trimmedS = trimS.length;

  // Gets the Midpoint of each string.
  if (trimmedS % 2 == 1) {
    result = 0;
    center = (trimS.length - 1) / 2;
    firstPart = myReg.test(!trimS.slice(0, center));
    secondPart = myReg.test(!trimS.slice(center));
    result = 0;
    for (let i = 0; i < center; i++) {
      if (firstPart[i] === secondPart[secondPart.length - (i + 1)]) {
        result += 1;
      } else {
        result -= 1;
        return false;
      }
    }
    if (result > 1) {
      return true;
    } else {
      false;
    }
  }
  //
  else if (trimmedS % 2 == 0) {
    result = 0;
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
        result -= 1;
        return false;
      }
    }
    if (result > 1) {
      return true;
    } else {
      false;
    }
  }*/
};

// Do not edit below this line
module.exports = palindromes;
