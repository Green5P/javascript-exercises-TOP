function reveersString(myString) {
  myString = "hello";
  stringLength = myString.length - 1;
  let newString = "";
  for (let i = 0; i <= stringLength; i++) {
    newString[i] = myString[stringLength];
    stringLength--;
  }
  return newString;
}
