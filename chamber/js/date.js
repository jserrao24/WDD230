const date = new Date();
const year = date.getFullYear();


document.querySelector("#year").textContent = year;
document.getElementById("updated").textContent = `Last Updated: ${document.lastModified}`;