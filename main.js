// alert("This is a terrible calculator.")

const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const calculateButton = document.getElementById('calculateButton');
const operatorSelect = document.getElementById('operator');
const resultSpan = document.getElementById('result');

calculateButton.addEventListener("click", calculate);

function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {   
        result = 'Error!';     
        resultSpan.innerText = result;
        return;
    } else if(operator === "+") {
        result = num1 + num2;
    } else if(operator === "-") {
        result = num1 - num2;
    } else if(operator === "x") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }

    resultSpan.innerText = result;
}