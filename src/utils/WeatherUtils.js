const convertKelvinToCelsius = (kelvin) => `${(kelvin - 273.15).toFixed(0)} °C`;
const generateWeatherIconURL = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
const convertTimeToLocal = (time) => new Date(time * 1000).toLocaleTimeString();
export { convertKelvinToCelsius, generateWeatherIconURL, convertTimeToLocal };
