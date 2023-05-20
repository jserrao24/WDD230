const banner = document.getElementById("banner");
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay === 1 || currentDay === 3) {
  banner.style.display = "block";
}

const lastUpdated = new Date(document.lastModified);
document.querySelector('#lastUpdated').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
document.querySelector('#lastUpdated-1').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
document.querySelector('#currentyear').textContent = currentDate.getFullYear();
document.querySelector('#currentyear-1').textContent = currentDate.getFullYear();
const date = document.querySelector("#currentdate");
try {
    const option = {
        weekday: "long"
    };
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
    };
    date.innerHTML = `${currentDate.toLocaleDateString("en-UK", option)}, ${currentDate.toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
    console.log("Error with code or your browser does not support Locale");
}