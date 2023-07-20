const fruitLink = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let drinkList = [];

async function getFruit() {
    const response = await fetch(fruitLink);
    if (response.ok) {
        const fruits = await response.json();
        output(fruits);
    }
};

async function getNutrition(options) {
    const response = await fetch(fruitLink);
    if (response.ok) {
        const fruits = await response.json();
        displayOrder(fruits);
    }
};

function output(fruits) {
    let num=0;
    while (num<3) {
        const label = document.createElement("label");
        const select = document.createElement("select");
        const name = `fruit${num+1}`

        select.name = name;
        select.id = name;
        select.innerHTML = `<option value="Select Fruit">Select Fruit</option>`;

        label.textContent = `Fruit ${num+1}:`
        label.setAttribute("class", "top")

        for (let i = 0; i < fruits.length; i++) {
            const fruit = fruits[i];
            const option = document.createElement("option");

            option.value = fruit.name;
            option.textContent = fruit.name;

            select.appendChild(option);
        }
        label.appendChild(select);
        document.getElementById("fruits-options-fieldset").appendChild(label)
        num += 1;
    }
}

function displayOrder(fruits) {
    document.getElementById("totalJuice").innerHTML = "";

    const card = document.createElement("section");
    const order = document.createElement("div");
    const contact = document.createElement('dl');
    const chosenFruit = document.createElement('dl');
    const nutrition = document.createElement('dl');
    const instructions = document.createElement('dl');
    const thanks = document.createElement('p');

    let protein = 0;
    let carbohydrates = 0;
    let fats = 0;
    let calories = 0;
    let sugar = 0;

    card.innerHTML = "<h2>Your Order</h2>";
    order.id = "order";
    contact.innerHTML = `<dt><h3>Contact</h3></dt><dd><b>Phone:</b> ${document.getElementById('phone').value}</dd><dd><b>Name:</b> ${document.getElementById('firstName').value}</dd>`
    chosenFruit.innerHTML = `<dt><h3>Fruit Choices</h3></dt><dd><b>Fruit 1:</b> ${document.getElementById('fruit1').value}</dd><dd><b>Fruit 2:</b> ${document.getElementById('fruit2').value}</dd><dd><b>Fruit 3:</b> ${document.getElementById('fruit3').value}</dd>`

    for (let i = 0; i < 3; i++) {
        const option = document.getElementById(`fruit${i+1}`);

        for (let j = 0; j < fruits.length; j++) {

            const fruit = fruits[j];

            if (fruit.name == option.value) {
                
                carbohydrates += fruit.nutritions.carbohydrates;
                protein += fruit.nutritions.protein;
                fats += fruit.nutritions.fat;
                calories += fruit.nutritions.calories;
                sugar += fruit.nutritions.sugar;
            }
        };
    };
    drinkList.push(fruits);
    // update(drinkList);
    
    localStorage.setItem("drinks", JSON.stringify(drinkList));
    
    
    nutrition.innerHTML =  `<dt><h3>Nutrition</h3></dt><dd><b>Carbohydrates</b>: ${carbohydrates.toFixed(2)}</dd><dd><b>Protein</b>: ${protein.toFixed(2)}</dd><dd><b>Fat</b>: ${fats.toFixed(2)}</dd><dd><b>Calories</b>: ${calories.toFixed(2)}</dd><dd><b>Sugar</b>: ${sugar.toFixed(2)}</dd>`;
    
    instructions.innerHTML = `<dt><h3>Special Instructions</h3></dt><dd>${document.getElementById('addInstruct').value}</dd>`;
    
    thanks.innerHTML = 'You have successfully created your drink! Please wait for the confirmation message on your phone.';
    thanks.id = 'thankYou';
    
    order.appendChild(contact);
    order.appendChild(chosenFruit);
    order.appendChild(nutrition);
    order.appendChild(instructions);
    order.appendChild(thanks);
    
    card.appendChild(order);
    
    document.getElementById("totalJuice").appendChild(card);
}
getFruit();


const form = document.querySelector('form');

form.addEventListener("change", () => {
    if (form.checkValidity()) {
        document.getElementById("invalidForm").style = 'display:none;';
        document.getElementById("createBtn").disabled = !form.checkValidity();
    }
    else if (!form.checkValidity()) {
        document.getElementById("invalidForm").style = 'display:block;';
        document.getElementById("createBtn").disabled = form.checkValidity();
    }
});


document.getElementById("createBtn").addEventListener("click", () => {
    if (form.checkValidity()) {
        getNutrition();
    }
    else if (!form.checkValidity()) {
        console.log("mao ni ang sayup")
    }
});


let exist = localStorage.getItem('drinks');
if (exist) {
  drinkList = JSON.parse(localStorage.getItem('drinks'));
  update(drinkList);
}