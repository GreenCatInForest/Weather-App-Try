let cityInput = document.querySelector("#cityInput");
let cityOutput = document.querySelector("#cityOutput");
let cityTemperature = document.querySelector("#cityTemperature");
let cityHumidity = document.querySelector("#cityHumidity");
let checkWeatherInCity = document.querySelector("#checkWeatherInCity");
let apiKey = "cc8bb3bb7011ef268a462c26e462d900";

let getWeather = () => {
  let city = cityInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

let submitButton = (event) => {
  event.preventDefault();
  getWeather();
};

checkWeatherInCity.addEventListener("click", submitButton);
