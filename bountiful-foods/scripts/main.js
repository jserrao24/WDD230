const lastUpdated = new Date(document.lastModified);
document.querySelector('#lastUpdated').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
document.querySelector('#lastUpdated-1').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
const currentDate = new Date();
document.querySelector('#currentyear').textContent = currentDate.getFullYear();
document.querySelector('#currentyear-1').textContent = currentDate.getFullYear();
const date = document.querySelector("#currentdate");

const option = {
	weekday: "long"
}
const options = {
	month: "long",
	day: "numeric",
	year: "numeric"
};
date.innerHTML = `${new Date().toLocaleDateString("en-UK", option)}, ${new Date().toLocaleDateString("en-UK", options)}</span>`;
