const repeatString = function (string, num) {
  let myString = "";
  if (num < 0) {
    // console.log('ERROR');
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      myString += string;
    }
    return myString;
  }
};

// Do not edit below this line
module.exports = repeatString;
