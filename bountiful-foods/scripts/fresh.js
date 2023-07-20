const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitData(url) {
    const response = await fetch(url);
    const fruits = await response.json(); 
    createList1(fruits);
    createList2(fruits);
    createList3(fruits);
  } 

function createList1 (fruits) {  
    const choice1 = document.querySelector('select.choice1');
    for (i = 0 ; i< fruits.length; i++) {
      let option = document.createElement('option');
      let carbohydrates = fruits[i].nutritions.carbohydrates;
      let protein = fruits[i].nutritions.protein;
      let fat = fruits[i].nutritions.fat;
      let sugar = fruits[i].nutritions.sugar;
      let calories = fruits[i].nutritions.calories;
      option.setAttribute('value', fruits[i].name);
      option.setAttribute('data-carbo', carbohydrates);
      option.setAttribute('data-pro', protein);
      option.setAttribute('data-fat', fat);
      option.setAttribute('data-sugar', sugar);
      option.setAttribute('data-cal', calories);
      option.textContent = `${fruits[i].name}`;
      choice1.appendChild(option);
    }   
}

function createList2 (fruits) {  
  const choice2 = document.querySelector('select.choice2');
  for (i = 0 ; i< fruits.length; i++) {
    let option = document.createElement('option');
    let carbohydrates = fruits[i].nutritions.carbohydrates;
    let protein = fruits[i].nutritions.protein;
    let fat = fruits[i].nutritions.fat;
    let sugar = fruits[i].nutritions.sugar;
    let calories = fruits[i].nutritions.calories;
    option.setAttribute('value', fruits[i].name);
    option.setAttribute('data-carbo', carbohydrates);
    option.setAttribute('data-pro', protein);
    option.setAttribute('data-fat', fat);
    option.setAttribute('data-sugar', sugar);
    option.setAttribute('data-cal', calories);
    option.textContent = `${fruits[i].name}`;
    choice2.appendChild(option);   
  }      
}

function createList3 (fruits) {  
  const choice3 = document.querySelector('select.choice3');
  for (i = 0 ; i< fruits.length; i++) {
    let option = document.createElement('option');
    let carbohydrates = fruits[i].nutritions.carbohydrates;
    let protein = fruits[i].nutritions.protein;
    let fat = fruits[i].nutritions.fat;
    let sugar = fruits[i].nutritions.sugar;
    let calories = fruits[i].nutritions.calories;
    option.setAttribute('value', fruits[i].name);
    option.setAttribute('data-carbo', carbohydrates);
    option.setAttribute('data-pro', protein);
    option.setAttribute('data-fat', fat);
    option.setAttribute('data-sugar', sugar);
    option.setAttribute('data-cal', calories);
    option.textContent = `${fruits[i].name}`;
    choice3.appendChild(option);
  }      
}

function displayResults() {
  const results = document.querySelector('div.results');
  
  let now = new Date();
  
  let drink = document.createElement('section');
  let p1 = document.createElement('p');
  let h2 = document.createElement('h2');
  let p2 = document.createElement('p');
  let h3 = document.createElement('h3');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');

  const name1 = document.querySelector("#name1").value;
  const mail = document.querySelector("#mail").value;
  const phone = document.querySelector("#phone").value;
  const fruit1 = document.querySelector("#fruit1").value;
  const fruit2 = document.querySelector("#fruit2").value;
  const fruit3 = document.querySelector("#fruit3").value;
  const instructions = document.querySelector("#instructions").value;

  let list1 = document.getElementById("fruit1").options;
  let list2 = document.getElementById("fruit2").options;
  let list3 = document.getElementById("fruit3").options;

  let index1 = 0;
  while (list1[index1].text != fruit1 ) {
    index1 +=1;
  }
  let index2 = 0;
  while (list2[index2].text != fruit2 ) {
    index2 +=1;
  }
  let index3 = 0;
  while (list3[index3].text != fruit3 ) {
    index3 +=1;
  }

  let amountCarbo = (parseFloat(list1[index1].getAttribute('data-carbo')) + parseFloat(list2[index2].getAttribute('data-carbo')) + parseFloat(list3[index3].getAttribute('data-carbo'))).toFixed(2);
  let amountPro = (parseFloat(list1[index1].getAttribute('data-pro')) + parseFloat(list2[index2].getAttribute('data-pro')) + parseFloat(list3[index3].getAttribute('data-pro'))).toFixed(2);
  let amountFat = (parseFloat(list1[index1].getAttribute('data-fat')) + parseFloat(list2[index2].getAttribute('data-fat')) + parseFloat(list3[index3].getAttribute('data-fat'))).toFixed(2);
  let amountSugar = (parseFloat(list1[index1].getAttribute('data-sugar')) + parseFloat(list2[index2].getAttribute('data-sugar')) + parseFloat(list3[index3].getAttribute('data-sugar'))).toFixed(2);
  let amountCal = (parseFloat(list1[index1].getAttribute('data-cal')) + parseFloat(list2[index2].getAttribute('data-cal')) + parseFloat(list3[index3].getAttribute('data-cal'))).toFixed(2);
 
  p1.innerHTML = `&#128203; <b>My Drink</b> <br>${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;
  h2.innerHTML = name1;
  p2.innerHTML = `${mail}<br>${phone}`;
  h3.innerHTML = `<b>${fruit1} - ${fruit2} - ${fruit3}</b>`;
  p3.innerHTML = `<u>Instructions:</u> ${instructions}`;
  p4.innerHTML = `Carbohydrates: <b>${amountCarbo}</b><br>Protein: <b>${amountPro}</b><br>Fat: <b>${amountFat}</b><br>Sugar: <b>${amountSugar}</b><br>Calories: <b>${amountCal}</b>`;

  drink.appendChild(p1);
  drink.appendChild(h2);
  drink.appendChild(p2);
  drink.appendChild(h3);
  drink.appendChild(p3);
  drink.appendChild(p4);
  results.appendChild(drink);

  let currentNumber = 0;
  let lastNumberDrink = Number(window.localStorage.getItem("lastNumberDrink-ls")) || 0;
  currentNumber = lastNumberDrink + 1;
  localStorage.setItem("lastNumberDrink-ls", currentNumber);

}

getFruitData(url); 

function display() {
  const name1 = document.querySelector("#name1");
  const mail = document.querySelector("#mail");
  const phone = document.querySelector("#phone");
  if (name1.value.length == 0) {       //because attribute "required" doesn't work in my code with the method preventDefault()
			name1.focus();                            
			alert(' First Name is required!');                                        
	} else if (mail.value.length == 0) {
      mail.focus();                            
			alert('Email is required!'); 
    } else if (phone.value.length == 0) {
      phone.focus();                            
			alert('Phone is required!'); 
    } else {displayResults();}
}

document.querySelector("#subBtn").addEventListener('click', function(event){
  event.preventDefault();       // to show the result on the page using type "submit"
  display();  
});



