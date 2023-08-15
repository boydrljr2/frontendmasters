/*display e.t.innerText in output
1. get a query selector for the output-span innerText
2. Set a listener for the buttons, just one listener on calculator-buttons
3. Set the output innertext to the e.t.innertext
*/

let operand = 0;
let operator = "";
let output = document.querySelector('.output-span')
console.log("output: ", output);

function initializeButtonsListener() {
    document
        .querySelector('.calculator-buttons')
        .addEventListener('click', function (e) {
            buttonClick(e.target.innerText);
            }
        )
}

initializeButtonsListener();

function buttonClick(input) {
    console.log("input: ", input);
    if (isNaN(parseInt(input))) {
        handleSymbolInput(input);
    } else {
        handleNumberInput(input);
    }
}

function handleNumberInput(input) {
    if (output.innerText === "0") { 
        output.innerText = input; 
    } else {
        if (output.innerText === "NaN") { 
            output.innerText = input; 
        } else {
            if (output.innerText === "Infinity") { 
                output.innerText = input; 
            } else { 
                    output.innerText += input; 
            }
        }
    }
};

function handleSymbolInput(input) {
    console.log("input is not a number: ", input);
    switch (input) {
        case "C":
            output.innerText = "0";
            operand = 0;
            operator = "";
            console.log("case C operand: ", operand);
            console.log("case C operator: ", operator);
            break;

        case "←" :
            console.log("handleSymbolInput case ← ");
            if (output.innerText === "0") {
                output.innerText = "0";
            } else {
                if (output.innerText.length === 1) {
                    output.innerText = "0";
                } else {
                output.innerText = output.innerText.slice(0, -1);  
                }
            }
            break;
        
        case "+":
            console.log("handleSymbolInput case ÷ ");
            handleMathOperation();
            output.innerText = "0";
            operator = "+";
            console.log("case + operand: ", operand);
            console.log("case + operator: ", operator);
            break;

        case "-":
            console.log("handleSymbolInput case - ");
            handleMathOperation();
            output.innerText = "0";
            operator = "-";
            console.log("case - operand: ", operand);
            console.log("case - operator: ", operator);
            break;

        case "x":
            console.log("handleSymbolInput case x ");
            handleMathOperation();
            output.innerText = "0";
            operator = "x";
            console.log("case - operand: ", operand);
            console.log("case - operator: ", operator);
            break;
        
        case "÷":
            console.log("handleSymbolInput case ÷ ");
            handleMathOperation();
            output.innerText = "0";
            operator = "÷";
            console.log("case ÷ operand: ", operand);
            console.log("case ÷ operator: ", operator);
            break;
        
        case "=":
            console.log("handleSymbolInput case = ");
            handleMathOperation();
            output.innerText = operand;
            operand = 0;
            operator = '';
            console.log("case = operand 0?: ", operand);
            console.log("case = operator empty?: ", operator);
            break;

        default:
            console.log("handleSymbolInput default case");
            break;

    }
}

function handleMathOperation() {
    switch (operator) {
        case "+":
            console.log("handleMathOperation +")
            operand += parseInt(output.innerText);
            break;
        case "-":
            console.log("handleMathOperation -")
            operand -= parseInt(output.innerText);
            break;
        case "x":
            console.log("handleMathOperation x")
            operand *= parseInt(output.innerText);
            break;
        case "÷":
            console.log("handleMathOperation ÷")
            operand /= parseInt(output.innerText);
            break;
        default:
            console.log( "handleMathOperation default");
            operand = parseInt(output.innerText);
            console.log("handleMathOperation default: operator empty?", operator)
            break;
    }
}

