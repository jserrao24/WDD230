const wind = document.querySelector(".wind-speed");
const temperature = document.querySelector(".temperature");
const wind_chill = document.querySelector(".wind-chill");
const main = document.querySelector(".main");
const weatherIcon = document.querySelector("#weathericon");

const lat = 34.048689;
const lon = -106.896172;
const API_key = "c214e3f900b57a2339e013f6fe75b871";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`;
let results = null;


function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        return console.log("Error: " + JSON.stringify(response))
    }
}

let temp = "";
let main_state = "";
let wind_speed = "";


function doStuff(data) {
    results = data;
    icon = results['weather'][0]['icon'];
    main_state = results['weather'][0]['main'];
    temp = results['main']['temp'];
    wind_speed = results['wind']['speed'];

    wind.innerHTML = wind_speed;
    temperature.innerHTML = temp + "°F";
    main.innerHTML = main_state;
    wind_chill.innerHTML = (35.74 + (0.6215 * temp) - (35.75 * (wind_speed ** 0.16)) + (0.4275 * (temp * (wind_speed ** 0.16)))).toFixed(2) + "°F";
    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.alt = main_state;
}

const weatherData = fetch(url).then(convertToJson).then(doStuff);