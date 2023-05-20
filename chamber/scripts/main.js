const banner = document.getElementById("banner");
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay === 3) { // Wednesday is represented by 3 (0 for Sunday, 1 for Monday, and so on)
  banner.style.display = "block";
} else {
  banner.style.display = "none"; // Hide the banner on days other than Wednesday
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