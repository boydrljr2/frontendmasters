const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const DOGIMAGE_URL = "https://dog.ceo/api/breeds/image/random";

const breedList = document.getElementById("breed-list");
const dogImage = document.getElementById("dog-image");
const loadingSpinner = document.getElementById("loading-spinner");

async function initialize() {

    /* fetch the breeds list from the dog.ceo API */
    const response = await fetch(BREEDS_URL);
    const responseJSON = await response.json();

    /* turn responseJSON keys into an array of strings */
    const breedsArray = Object.keys(responseJSON.message);

    /* For each string in the array create an <option> element and append to options*/
    let breedOptions = "";
    for (let i=0; i<breedsArray.length; i++) {
        let breedName = breedsArray[i].charAt(0).toUpperCase() + breedsArray[i].slice(1);
        breedOptions += `<option value=${breedsArray[i]}>${breedName}</option>`;
    }

    /* set the innerHTML of the breedList to the string options */ 
    breedList.innerHTML = breedOptions;

    /* get a random dog image to start */
    const randomDogImage = await fetch(DOGIMAGE_URL);
    const randomDogImageJSON = await randomDogImage.json();
    dogImage.src = randomDogImageJSON.message;

    /* stop the spinner */
    loadingSpinner.classList.remove("show");
    dogImage.classList.add("show");

    /* add event listener to the breedList select */
    breedList.addEventListener("change", handleBreedSelect);
}

initialize();

async function handleBreedSelect(event) {
    const breedSelected = event.target.value;

    /* hide the current dog image */
    dogImage.classList.remove("show");
    /* show the spinner */
    loadingSpinner.classList.add("show");

    /* fetch the image for the selected breed */
    const response = await fetch(`https://dog.ceo/api/breed/${breedSelected}/images/random`);
    const responseJSON = await response.json();

    /* set dogImage.src to the new image */
    dogImage.src = responseJSON.message;

    /* stop the spinner */
    loadingSpinner.classList.remove("show");
    /* show the new dog image */
    dogImage.classList.add("show");
}


