const url = 'data.json';

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  displayBusinesses(data.businesses);
}

getBusinessData();

const displayBusinesses = (businesses) => {
  const directory = document.querySelector('main');
  const cards = document.createElement('div');
  cards.classList.add('cards');

  businesses.forEach((business) => {
    let card = document.createElement('section');
    card.classList.add('card');

    let name = document.createElement('h2');
    name.textContent = business.name;

    let address = document.createElement('p');
    address.textContent = `Address: ${business.address}`;

    let phone = document.createElement('p');
    phone.textContent = `Phone: ${business.phone}`;

    let website = document.createElement('p');
    website.textContent = `Website: `;
    let link = document.createElement('a');
    link.href = business.website;
    link.textContent = business.website;
    website.appendChild(link);

    let image = document.createElement('img');
    image.src = business.image;
    image.alt = business.name;

    let membership = document.createElement('p');
    membership.textContent = `Membership Level: ${business.membership_level}`;

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(image);
    card.appendChild(membership);

    cards.appendChild(card);
  });

  directory.appendChild(cards);
};