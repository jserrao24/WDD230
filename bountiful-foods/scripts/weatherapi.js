const temp = document.querySelector('#temperature');
const currentHum = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figc');

const temp1 = document.querySelector('#temperature1');
const temp2 = document.querySelector('#temperature2');
const temp3 = document.querySelector('#temperature3');

const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');

const opti = {
	weekday: "long"
}

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&units=imperial&appid=5d8dc2b157aecf9cac44be2b44bc310f';
const urlF ='https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=5d8dc2b157aecf9cac44be2b44bc310f';

async function apiFetch() {
  const response = await fetch(url);
  const data = await response.json();
  displayResults(data);
}

async function aFetch() {
  const response = await fetch(urlF);
  const dataF = await response.json();
  display(dataF);
}

function  displayResults(weatherData) {
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    currentHum.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
   
    captionDesc.textContent = desc.replace(/(^|\s)\w/g, l => l.toUpperCase());

}

function  display(forcastData) {
  
  temp1.innerHTML = `<strong>${forcastData.list[8].main.temp.toFixed(0)}</strong>`; // 3 hour forecast data: so 3 x 8 = 24 h
  temp2.innerHTML = `<strong>${forcastData.list[16].main.temp.toFixed(0)}</strong>`;
  temp3.innerHTML = `<strong>${forcastData.list[24].main.temp.toFixed(0)}</strong>`;
 
  day1.innerHTML = `<strong>${new Date(forcastData.list[8].dt * 1000).toLocaleDateString('en', opti)}</strong>`; // tomorrow same time 
  day2.innerHTML = `<strong>${new Date(forcastData.list[16].dt * 1000).toLocaleDateString('en', opti)}</strong>`; // day after tomorrow same time 
  day3.innerHTML = `<strong>${new Date(forcastData.list[24].dt * 1000).toLocaleDateString('en', opti)}</strong>`;

}

apiFetch();
aFetch();