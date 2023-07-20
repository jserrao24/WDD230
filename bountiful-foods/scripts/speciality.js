const numberDisplay = document.querySelector(".number1");
const number = Number(window.localStorage.getItem("lastNumberDrink-ls")) || 0;
if (number == '0') {
    numberDisplay.textContent = `You have not submitted any specialty drinks yet.`;
} else if (number == '1') {
		numberDisplay.textContent = `You have submitted ` + number + ` specialty drink.`;
} else {
		numberDisplay.textContent = `You have submitted ` + number + ` speciality drinks.`;
}