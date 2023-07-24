
import { API_KEY } from "./config.js";

fetchWeatherData('Stockholm');

const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherInfoDiv = document.getElementById('weather-info');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const city = cityInput.value;
  fetchWeatherData(city);
});

function fetchWeatherData(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      displayWeatherInfo(data);
    })
    .catch(error => {
      console.error('Ett fel inträffade:', error);
      displayErrorMessage();
    });
}

function displayWeatherInfo(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const windSpeed = data.wind.speed;

  weatherInfoDiv.innerHTML = `
    <h2>${cityName}</h2>
    <p>Temperature: ${temperature} K</p>
    <p>Weather: ${weatherDescription}</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;
}

function displayErrorMessage() {
  weatherInfoDiv.innerHTML = `<p>Hittade inte staden. Försök igen.</p>`;
}
