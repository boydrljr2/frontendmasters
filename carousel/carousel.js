const prevButton = document.querySelector('#carousel-button-prev');
const nextButton = document.querySelector('#carousel-button-next');
const carouselImages = document.querySelectorAll('.carousel-image');

let currentImageIndex = 0;

console.log("previous button: ", prevButton);
console.log("next button: ", nextButton);
console.log("carousel images: ", carouselImages);

prevButton.addEventListener('click', function() {
    carouselImages[currentImageIndex].classList.remove('active');
    currentImageIndex = ((currentImageIndex > 0) * currentImageIndex - 1)
        + ((currentImageIndex <= 0) * (carouselImages.length));
    carouselImages[currentImageIndex].classList.add('active');
});

nextButton.addEventListener('click', function() {
    carouselImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImages[currentImageIndex].classList.add('active');
});