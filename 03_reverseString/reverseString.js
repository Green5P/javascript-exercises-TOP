// const reverseString2 = function (myString) {
//   return myString.split("").reverse().join("");
// };

const reverseString = function (myString) {
  stringLength = myString.length - 1;
  let newString = "";
  for (let i = stringLength; i >= 0; i--) {
    newString += myString[i];
    // stringLength--;
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
