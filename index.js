function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius;
  if (celsius < 0) {
    return "It's freezing!";
  } else if (celsius >= 0 && celsius < 20) {
    return "It's cold!";
  } else if (celsius >= 20 && celsius < 30) {
    return "It's warm";
  } else if (celsius >= 30 && celsius < 40) {
    return "It's hot";
  } else celsius >= 40;
  return "It's hot";
}

const fahrenheitTemp = 75;
const celsiusTemp = convertToCelsius;
console.log(`${fahrenheitTemp} is ${celsiusTemp.tofixed(2)}`);

const temperatureDescription = describeTemperature(fahrenheitTemp);
console.log(`For ${fahrenheitTemp}, the weather is ${temperatureDescription}`);
