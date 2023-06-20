let runningTotal = 0;
let buffer = "0";
let operator = "";

const result = document.querySelector('.result');

function init() {
    document.querySelector('.calc-keypad')
        .addEventListener('click', function(event) {
            calcButtonClicked(event.target.innerText);
        }
    );
    console.log('init: ', document.querySelector('.calc-keypad'));
}

init();

function calcButtonClicked(value) {
    if (isNaN(parseInt(value))) {
        console.log('calcButtonClicked value is NOT a number: ', value);
        handleSymbol(value);
    } else {
        console.log('calcButtonClicked value is a number: ', value)
        handleNumber(value);
    }
}

function handleNumber(value){
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    result.innerText = buffer;
}

function handleSymbol(){}

