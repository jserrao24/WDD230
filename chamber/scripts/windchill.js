const temperature = document.querySelector("#temperature").textContent;
const windSpeed = document.querySelector("#wind-speed").textContent;

const windChill = document.querySelector("#wind-chill");

const temp = temperature * 9 / 5 + 32;
const windS = windSpeed * 0.6213711922;

if (temp <= 50 && windS > 3 ) {
    const windC = 35.74 + .06215 * temp - 35.75 * windS ** 0.16 + 0.4275 * temp * windS ** 0.16;
    windChill.textContent = windC.toFixed(2);
} else {windChill.textContent = 'N/A';}