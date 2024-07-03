let displayValue = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = 0;

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1); 
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    let expression = displayValue;
    let operators = ['+', '-', '*', '/'];

    for (let op of operators) {
        if (expression.includes(op)) {
            operator = op;
            let operands = expression.split(operator);
            firstOperand = parseFloat(operands[0]);
            secondOperand = parseFloat(operands[1]);

            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
                default:
                    break;
            }

            displayValue = result.toString();
            updateDisplay();
            return;
        }
    }
}
