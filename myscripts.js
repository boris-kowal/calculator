function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {  
    if (b == 0) {return "dividing by 0 is not possible";}
    return (a / b).toFixed(2);
}
function operate(operator, a, b) {
    if (operator == "plus") {return add(a, b);}
    else if (operator == "minus") {return substract(a, b);}
    else if (operator == "time") {return multiply(a, b);}
    else if (operator == "divide") {return divide(a, b);}
}
const btn1 = document.querySelector('#n1');
btn1.addEventListener('click', (e) => {display(e);})
const btn2 = document.querySelector('#n2');
btn2.addEventListener('click', (e) => {display(e);})
const btn3 = document.querySelector('#n3');
btn3.addEventListener('click', (e) => {display(e);})
const btn4 = document.querySelector('#n4');
btn4.addEventListener('click', (e) => {display(e);})
const btn5 = document.querySelector('#n5');
btn5.addEventListener('click', (e) => {display(e);})
const btn6 = document.querySelector('#n6');
btn6.addEventListener('click', (e) => {display(e);})
const btn7 = document.querySelector('#n7');
btn7.addEventListener('click', (e) => {display(e);})
const btn8 = document.querySelector('#n8');
btn8.addEventListener('click', (e) => {display(e);})
const btn9 = document.querySelector('#n9');
btn9.addEventListener('click', (e) => {display(e);})
const btn0 = document.querySelector('#n0');
btn0.addEventListener('click', (e) => {display(e);})
const btnPoint = document.querySelector('#point');
btnPoint.addEventListener('click', (e) => {display(e);})
const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', equal);
const btnTime = document.querySelector('#time');
btnTime.addEventListener('click', (e) => {storeOperator(e);})
const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', (e) => {storeOperator(e);})
const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', (e) => {storeOperator(e);})
const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', (e) => {storeOperator(e);})
const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', (e) => {clear(e);})
const btnDelete = document.querySelector('#delete');
btnDelete.addEventListener('click', (e) => {del(e);})

window.addEventListener('keydown', (e) => {
    if (e.key == '0') {btn0.click()}
    if (e.key == '1') {btn1.click()}
    if (e.key == '2') {btn2.click()}
    if (e.key == '3') {btn3.click()}
    if (e.key == '4') {btn4.click()}
    if (e.key == '5') {btn5.click()}
    if (e.key == '6') {btn6.click()}
    if (e.key == '7') {btn7.click()}
    if (e.key == '8') {btn8.click()}
    if (e.key == '9') {btn9.click()}
    if (e.key == '.') {btnPoint.click()}
    if (e.key == 'Enter') {btnEqual.click()}
    if (e.key == '+') {btnPlus.click()}
    if (e.key == '-') {btnMinus.click()}
    if (e.key == '*') {btnTime.click()}
    if (e.key == '/') {btnDivide.click()}
    if (e.key == 'Backspace') {btnDelete.click()}
    if (e.key == 'Escape') {btnClear.click()}
})
let value =["",""];
let operator;
let firstNumber = true;
let switchop = false;

function del(e) {
    const result = document.querySelector('#result');
    if (firstNumber) {
        value[0] = value[0].slice(0,-1);
        result.textContent = result.textContent.slice(0,-1);
    }
    else {
        value[1] = value[1].slice(0,-1);
        result.textContent = result.textContent.slice(0,-1);
    }
}
function display(e) {
    const result = document.querySelector('#result');
    if (e.target.value == ".") {
        if (result.textContent.indexOf(".") != -1) return;
    }
    if (switchop) {result.textContent = ""}
    switchop = false;
    result.textContent += e.target.value;
    if (firstNumber) {value[0] += e.target.value;}
    else {value[1] += e.target.value;}
}
function storeOperator(e) {
    const result = document.querySelector('#result');
    if (value[1]=="") {
        operator = e.target.value;
        firstNumber = false;
        switchop = true;
    } else {
        let equ = equal();
        value.splice(0, 1, equ);
        operator = e.target.value;
        result.textContent = equ;
        firstNumber = false;
        value[1] = "0";
        switchop = true;
    }
}
function equal() {
    const result = document.querySelector('#result');
    let equal = operate(operator, parseFloat(value[0]), parseFloat(value[1]));
    result.textContent = equal;
    return equal
}
function clear() {
    value = ["",""];
    operator = undefined;
    firstNumber = true;
    switchop = false;
    const result = document.querySelector('#result');
    result.textContent = "";

}