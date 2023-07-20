const total = document.getElementById("totalJuice");

const totalJuiceCreated = localStorage.getItem("totalJuice");
localStorage.setItem("totalJuice", total);

console.log(totalJuiceCreated)