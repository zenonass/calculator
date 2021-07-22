const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const minus = document.getElementById('minus');
const sum = document.getElementById('sum');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const squareRoot = document.getElementById('square-root');
const result = document.getElementById('result');
const equal = document.getElementById('equal');
const erase = document.getElementById('erase');
let inputNumbersString = '';
const inputNumbersArray = [100];
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
let operator = '';


equal.addEventListener('click',  () => {
    inputNumbersArray.push(parseInt(inputNumbersString))
    switch (operator) {
        case 'sum':
            result.textContent = inputNumbersArray.reduce(addition)
            inputNumbersString = '';
            break;
        case 'minus':
            result.textContent = inputNumbersArray.reduce(subtraction)
            inputNumbersString = '';
            break;
        case 'division':
            result.textContent = inputNumbersArray.reduce(multiplication)
            inputNumbersString = '';
            break;
        case 'multiplication':
            result.textContent = inputNumbersArray.reduce(division)
            inputNumbersString = '';
            break;    
        default:
            break;
    }
});

sum.addEventListener('click',  () => {
    operator = 'sum';
    inputNumbersArray.push(parseInt(inputNumbersString))
    result.textContent = '';
    inputNumbersString = '';
});

minus.addEventListener('click',  () => {
    operator = 'minus';
    inputNumbersArray.push(parseInt(inputNumbersString))
    result.textContent = '';
    inputNumbersString = '';
});

division.addEventListener('click',  () => {
    operator = 'division';
    inputNumbersArray.push(parseInt(inputNumbersString))
    result.textContent = '';
    inputNumbersString = '';
});

multiplication.addEventListener('click',  () => {
    operator = 'multiplication';
    inputNumbersArray.push(parseInt(inputNumbersString))
    result.textContent = '';
    inputNumbersString = '';
});

erase.addEventListener('click',  () => {
    result.textContent = '';
    inputNumbersString = '';
    inputNumbersArray = [];
});

one.addEventListener('click',  () => {
    result.textContent += 1
    inputNumbersString +='1'
});

two.addEventListener('click',  () => {
    result.textContent += 2
    inputNumbersString +='2'
});

three.addEventListener('click',  () => {
    result.textContent += 3
    inputNumbersString +='3'
});

four.addEventListener('click',  () => {
    result.textContent += 4
    inputNumbersString +='4'
});

five.addEventListener('click',  () => {
    result.textContent += 5
    inputNumbersString +='5'
});

six.addEventListener('click',  () => {
    result.textContent += 6
    inputNumbersString +='6'
});

seven.addEventListener('click',  () => {
    result.textContent += 7
    inputNumbersString +='7'
});

eight.addEventListener('click',  () => {
    result.textContent += 8
    inputNumbersString +='8'
});

nine.addEventListener('click',  () => {
    result.textContent += 9
    inputNumbersString +='9'
});