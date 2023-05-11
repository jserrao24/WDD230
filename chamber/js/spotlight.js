const spotlightDiv = document.querySelectorAll(".spotlight div");
const data = "json/data.json"


fetch(data)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const businesses = jsonObject['businesses']

        const filtered = businesses.filter((business) => {
            return business.membership == "Silver" || business.membership == "Gold";

        });


        spotlightDiv.forEach((spotlight, index) => {
            const rand = Math.floor(Math.random() * filtered.length);
            const business = filtered[rand];

            //Image
            let image = document.createElement("img");
            image.src = `images/${business.imgfile}`;
            image.setAttribute("alt", business.name);
            spotlight.appendChild(image);

            //Address
            let address = document.createElement("p");
            address.textContent = business.address;
            spotlight.appendChild(address);

            //Phone
            let phone = document.createElement("p");
            phone.textContent = business.phone;
            spotlight.appendChild(phone);

            //website
            let website = document.createElement("p");
            website.textContent = business.website;
            spotlight.appendChild(website);

            filtered.splice(rand, 1);


        });
    });