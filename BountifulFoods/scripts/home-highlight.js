const dataImages = "/BountifulFoods/json/images.json"

async function displayImages() {
    const fruits = await getFruitsImages();
    const randomFruits = fourRandomImages();

        const image1 = fruits[randomFruits[0]];
        const image2 = fruits[randomFruits[1]];
        const image3 = fruits[randomFruits[2]];
        const image4 = fruits[randomFruits[3]];

        console.log(fruits);

        for (let i=1; i<5; i++) {
            let fruits;
            switch (i) {
                case 1: 
                    fruits = image1;
                    break;
                case 2: 
                    fruits = image2;
                    break;
                case 3: 
                    fruits = image3;
                    break;
                default:
                    fruits = image4;
            }

            const highlight = document.getElementById("img-section");

            let imgCard = document.createElement("picture");
            let image = document.createElement("img");

            // image.setAttribute("src", `${image}${i}`.img);
            image.setAttribute("src", "/BountifulFoods/images/placeholder-img.jpg")
            image.setAttribute("alt", "placeholder image");
            image.setAttribute("loading", "lazy");

            imgCard.setAttribute("id", `img-card${i}`);
            imgCard.setAttribute("class", "imgCard");
            imgCard.appendChild(image);

            highlight.appendChild(imgCard);

            const newHighlight = document.getElementById(`img-card${i}`);
            newHighlight.children[0].setAttribute("src", fruits.img);
            newHighlight.children[0].setAttribute("alt", `An image of: ` + `${fruits.alt}`);

                
        }
    }

    displayImages();

    async function getFruitsImages() {
        const request = await fetch(dataImages);

        if (request.ok) {
            const response = await request.json();
            const fruits = await response["fruits"];

            let fruitsImages = [];
            for (const fruit of fruits) {
                fruitsImages.push(fruit)
            }
            return fruitsImages;
        }
    };

    function fourRandomImages() {
        let randomImages = new Map();
        for (let i=0; i<4; i++) {
            while (randomImages.size!=4) {
                const number = Math.floor(Math.random() * 8);
                randomImages.set(number, number);
            }
        }
        return [...randomImages.keys()];
    }

    fourRandomImages();