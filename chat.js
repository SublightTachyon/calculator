let firstOperand = null;
let operator = null;
let secondOperand = null;
let displayValue = "";

function addToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function addOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        operator = op;
        displayValue = "";
    } else if (displayValue !== "") {
        secondOperand = parseFloat(displayValue);
        calculate();
        firstOperand = parseFloat(document.getElementById("display").value);
        operator = op;
        secondOperand = null;
        displayValue = "";
    } else {
        operator = op;
    }
}

function calculate() {
    if (secondOperand === null && operator === "/") {
        alert("Error: Division by zero");
        clearDisplay();
        return;
    }
    if (firstOperand !== null && operator !== null && displayValue !== "") {
        secondOperand = parseFloat(displayValue);
        let result = null;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = firstOperand / secondOperand;
                break;
            default:
                result = null;
        }
        document.getElementById("display").value = result;
        firstOperand = result;
        operator = null;
        secondOperand = null;
        displayValue = "";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
    firstOperand = null;
    operator = null;
    secondOperand = null;
    displayValue = "";
}
