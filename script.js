function calculator(num1, operator, num2) {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    } else {
      return "Invalid operator";
    }
  }

function add(num1,num2) {
    return num1+num2;
}  

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,operator,num2){
    if (operator === '+'){
        return add(num1,num2)
    } else if (operator === '-'){
        return subtract(num1,num2)
    } else if (operator === '*'){
        return multiply(num1,num2)
    } else if (operator === '/'){
        return divide(num1,num2)
    } else {
        return 'Invalid Request'
    }
    }

    let firstOperand = null;
		let operator = null;
		let secondOperand = null;
		let displayValue = "";

		function addToDisplay(digit) {
			displayValue += digit;
			document.getElementById("display").value = displayValue;
		}

		function addOperator(op) {
			if (firstOperand === null) {
				firstOperand = parseFloat(displayValue);
				operator = op;}}