const images = document.querySelectorAll('img[data-src]');


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src'); };
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
}
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        })
    }, imgOptions);


    images.forEach(image => {
        imageObserver.observe(image);
    });
}
else {
    images.forEach((img) => {
        loadImages(img);
    });
}

const visits = document.querySelector(".visits");

let visitTime = window.localStorage.getItem("visits");
const current_date = Date.now();
if (visits) {
    const last_seconds = Math.ceil((current_date - parseInt(visitTime)) / 1060);
    const last_minutes = Math.floor(last_seconds / 60);
    const last_hours = Math.floor(last_minutes / 60);
    const last_days = last_hours / 24;
    visits.innerHTML = `Last Visit: ${last_days} days, ${last_hours} hours, ${last_minutes} minutes, ${last_seconds} seconds`;
}
window.localStorage.setItem("visits", current_date);
