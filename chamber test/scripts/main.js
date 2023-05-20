const lastUpdated = new Date(document.lastModified);
document.querySelector('#lastUpdated').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
document.querySelector('#lastUpdated-1').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
const currentDate = new Date();
document.querySelector('#currentyear').textContent = currentDate.getFullYear();
document.querySelector('#currentyear-1').textContent = currentDate.getFullYear();
const date = document.querySelector("#currentdate");
try {
    const option = {
        weekday: "long"
    }
	const options = {
		month: "long",
		day: "numeric",
		year: "numeric"
	};
	date.innerHTML = `${new Date().toLocaleDateString("en-UK", option)}, ${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
};

const divi = document.querySelector('div');
if (currentDate.getDay() == 1 || currentDate.getDay() == 2) {
    const para = document.createElement('p');
    divi.appendChild(para);
    para.textContent = "🤝🏼 Come join us for the chamber meet & greet Wednesday at 7:00 p.m. 🤝🏼";
	divi.style.display = "block";
} else {divi.style.display = "none";}