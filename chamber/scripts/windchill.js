const currentTemp = document.querySelector('#current-temp');
const currentWindSpeed = document.querySelector('#current-wind-speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windChill = document.querySelector('#wind-chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=9e2c021cc17346bd515b672155d1d63c';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // for testing the API call
      displayResults(data);
      calculateWindChill(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  currentWindSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = capitalizeWords(desc);
}

function capitalizeWords(text) {
  return text.replace(/\b\w/g, match => match.toUpperCase());
}

function calculateWindChill(weatherData) {
  const temperature = weatherData.main.temp;
  const windSpeed = weatherData.wind.speed;

  const temp = temperature * 9 / 5 + 32;
  const windS = windSpeed * 0.6213711922;

  if (temp <= 50 && windS > 3) {
    const windC = 35.74 + .06215 * temp - 35.75 * windS ** 0.16 + 0.4275 * temp * windS ** 0.16;
    windChill.textContent = windC.toFixed(2);
  } else {
    windChill.textContent = 'N/A';
  }
}