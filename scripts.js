function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) return "Nice try"
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    switch (operator){
        case '+':
            return add(firstNum, secondNum);
            
        case '-':
            return subtract(firstNum, secondNum);

        case '*':
            return multiply(firstNum, secondNum);

        case '/':
            return divide(firstNum, secondNum);
    }
}

let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

numbers.forEach((button) => button.addEventListener('click', (e) => numberHandler(e)));
operators.forEach((button) => button.addEventListener('click', (e) => operatorHandler(e)));
equals.addEventListener('click', (e) => equalsHandler(e));

clear.addEventListener('click', () => {
    display.textContent = '';
    firstNum = '';
    secondNum = '';
    operator = '';
})

function numberHandler(e){
    if (!operator){
        firstNum += e.target.textContent;
        display.textContent = firstNum;
    }
    else {
        secondNum += e.target.textContent;
        display.textContent = secondNum;
    }
}

function operatorHandler(e){
    if (!operator){
        operator = e.target.textContent;
    }
    else{
        result = operate(Number.parseInt(firstNum), Number.parseInt(secondNum), operator);
        display.textContent = result;
        operator = e.target.textContent;
        firstNum = result;
        secondNum = '';
    }
    console.log(e.target.textContent);
}

function equalsHandler(e) {
    result = operate(Number.parseInt(firstNum), Number.parseInt(secondNum), operator);
    display.textContent = result;
    operator = '';
    firstNum = result;
    secondNum = '';
}