let cityInput = document.querySelector("#cityInput");
let cityOutput = document.querySelector("#cityOutput");
let cityTemperature = document.querySelector("#cityTemperature");
let cityHumidity = document.querySelector("#cityHumidity");
let checkWeatherInCity = document.querySelector("#checkWeatherInCity");
let apiKey = "cc8bb3bb7011ef268a462c26e462d900";

let getCity = () => {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value},${state code},${country code}&appid=cc8bb3bb7011ef268a462c26e462d900"
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

let getWeather = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=cc8bb3bb7011ef268a462c26e462d900"
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

let submitButton = (event) => {
  event.preventDefault();
  getCity();
};

checkWeatherInCity.addEventListener("click", submitButton);
