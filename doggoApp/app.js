const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const breedSelect = document.querySelector(".breedSelect");
console.log("breedSelect html: ", breedSelect);

const doggoImage = document.querySelector(".doggoImage");
console.log("doggoImage: ", doggoImage);

/* 
Write a fetch statement to return the data from BREEDS_URL,
then log the data to the console,
then create an array of all the keys in the message object of the data,
then log the array to the console.
*/
fetch (BREEDS_URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("data: ", data);
        const breedsObject = data.message;
        breedsArray = Object.keys(breedsObject);
        console.log("breedsArray: ", breedsArray);
        let options = "<option value=''>Pick a breed</option>";
        for (let i=0; i < breedsArray.length; i++){
            options += 
                '<option value=' + breedsArray[i] + '>' + breedsArray[i] + '</option>';
        }
        console.log("options: ", options);
        breedSelect.innerHTML = options;
        console.log("breedSelect innerHTML: ", breedSelect.innerHTML);
    });

/*
Add a listener to the breedSelect element that listens for a change event,
then logs the value of the event.target.value to the console,
then creates a variable called byBreed_URL that is equal to the string "https://dog.ceo/api/breed/" + event.target.value + "/images/random",
then logs the byBreed_URL to the console,
then fetches the data from byBreed_URL,
*/
breedSelect.addEventListener("change", function(event){
    console.log("event.target.value: ", event.target.value);
    let byBreed_URL = "https://dog.ceo/api/breed/" + event.target.value + "/images/random";
    console.log("byBreed_URL: ", byBreed_URL);
    fetch (byBreed_URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log("data: ", data);
            doggoImage.src = data.message;
            doggoImage.alt = data.message;
            doggoImageSource = 
            '<img src=' + data.message + ' alt= another doggy />';
            console.log("doggoImageSource: ", doggoImageSource);
            doggoImage.innerHTML = doggoImageSource;
        });
});
