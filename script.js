let firstNumber = "",
    secondNumber = "",
    operator = null;

const display = document.getElementById("display");
const digitButtons = document.querySelectorAll("button.digit");
const symbolButtons = document.querySelectorAll("button.symbol");
const clearDisplayButton = document.getElementById("clear-btn");
const calculateButton = document.getElementById("calc-btn");

digitButtons.forEach(
    (button) => (button.onclick = (e) => displayValue(e.target.innerText))
);
symbolButtons.forEach(
    (button) => (button.onclick = (e) => assignOperator(e.target.innerText))
);
clearDisplayButton.onclick = () => (display.innerText = "0");
calculateButton.onclick = () => (display.innerText = evaluate());

function displayValue(value) {
    if (display.innerText === "0") {
        display.innerText = "";
    }
    display.innerText += value;
}

function assignOperator(value) {
    if (operator !== null) {
        display.innerText = evaluate();
    }
    operator = value;
    display.innerHTML += "&nbsp;" + value + "&nbsp;";
}

function evaluate() {
    let list = display.innerText.split(operator);
    return Math.round(operate(operator, list[0], list[1]));
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "x":
            return multiply(num1, num2);

        case "÷":
            return divide(num1, num2);

        default:
            break;
    }
}
