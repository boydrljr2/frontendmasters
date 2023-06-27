const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

const ICOSwiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

function moreDoggo(){   
    fetch(BREEDS_URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            const img = document.createElement("img");
            img.src = data.message;
            img.alt = data.message;
            document.querySelector(".doggos").appendChild(img);
        });
}

document.querySelector(".more-dog").addEventListener("click", moreDoggo);

console.log("this will log first...");