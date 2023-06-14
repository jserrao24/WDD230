const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards');

  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    card.classList.add('card');

    // Create the HTML elements for name, birthdate, birthplace, death date, and number of children
    let name = document.createElement('h2');
    name.textContent = `${prophet.name} ${prophet.lastname}`;

    let birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

    let birthplace = document.createElement('p');
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

    let death = document.createElement('p');
    death.textContent = `Death: ${prophet.death || 'N/A'}`; // Show "N/A" if death date is null

    let numofchildren = document.createElement('p');
    numofchildren.textContent = `Number of Children: ${prophet.numofchildren}`;

    // Create an image element
    let image = document.createElement('img');
    image.src = prophet.imageurl;
    image.alt = `${prophet.name} ${prophet.lastname}`;

    // Append all the elements to the card
    card.appendChild(name);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(death);
    card.appendChild(numofchildren);
    card.appendChild(image); // Append the image element

    cards.appendChild(card);
  });
};