// script.js
let currentOperation = '';
let previousOperand = '';
let currentOperand = '';
const display = document.getElementById('display');

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') compute();
    previousOperand = currentOperand;
    currentOperation = operation;
    currentOperand = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    currentOperation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    currentOperation = undefined;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}
