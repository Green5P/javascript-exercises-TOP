const removeFromArray = function (myArray, ...constant) {
  return myArray.filter(function (value) {
    return !constant.includes(value);
  });
};

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
