const data = "json/data.json"

const main = document.querySelector(".cards");



fetch(data)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const businesses = jsonObject['businesses']
        businesses.forEach(businessDisplay);
    });




function businessDisplay(business) {

    //The card that we will create that contains the information.
    const card = document.createElement("div");
    card.classList.toggle("card-div")

    //Image
    const image = document.createElement("img");
    image.classList.add('card-image');
    image.src = `images/${business.imgfile}`;
    image.alt = business.name;
    image.setAttribute("loading", "lazy");
    card.appendChild(image);

    //Name
    const name = document.createElement("h2");
    name.textContent = business.name;
    card.appendChild(name);

    //Address
    const address = document.createElement("p");
    address.textContent = business.address;
    card.appendChild(address);

    //Phone
    const phone = document.createElement("p");
    phone.textContent = business.phone;
    card.appendChild(phone);

    //Website
    const website = document.createElement("a");
    website.textContent = business.website;
    website.href = business.website;
    card.appendChild(website);

    main.appendChild(card);
}

const button = document.querySelector(".toggle");
const buttonImg = document.querySelector(".button-img");

button.addEventListener("click", () => {
    if (buttonImg.src.indexOf('cardlayout.svg') != -1) {
        buttonImg.src = "images/list.svg";
    } else {
        buttonImg.src = "images/cardlayout.svg";
    }
    const cardImages = document.querySelectorAll(".card-image");
    console.log(cardImages)
    cardImages.forEach(function(item) {
        item.classList.toggle('display');
    });

    const cards = document.querySelector(".cards");

    cards.classList.toggle('cards-list');
})