const convertToCelsius = function (temperature) {
  if (temperature === 32) {
    return temperature - 32;
  } else {
    initialTemp = (temperature - 32) * (5 / 9);
    return (result = Math.ceil(initialTemp * 10) / 10);
  }
};

const convertToFahrenheit = function (temperature) {
  if (temperature === 0) {
    return temperature + 32;
  } else {
    initialTemp = temperature * (9 / 5) + 32;
    return (result = Math.ceil(initialTemp * 10) / 10);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
