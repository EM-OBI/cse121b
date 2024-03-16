/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    const add1 = Number(document.querySelector('#add1').value);
    const add2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(add1, add2);
}

const addButton = document.querySelector('#addNumbers');
addButton.addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function (){
    const subtract1 = Number(document.querySelector('#subtract1').value);
    const subtract2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

const subtractButton = document.querySelector('#subtractNumbers');
subtractButton.addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

const multiplyButton = document.querySelector('#multiplyNumbers');
multiplyButton.addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

const divideButton = document.querySelector('#divideNumbers');
divideButton.addEventListener('click', divideNumbers);

/* Decision Structure */


const displayTotal = () => {
    const subTotal = parseFloat(document.querySelector('#subtotal').value)
    const member = document.querySelector('#member');
    let total;
    if (member.checked) {
        total = subTotal * 0.8;
    }
    else 
    {
        total = subTotal
    }
    document.querySelector('#total').innerHTML = `$${total.toFixed(2)}`;
}

document.querySelector('#getTotal').addEventListener('click', displayTotal);



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map((number) => number * 2)
document.querySelector('#multiplied').innerHTML = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);