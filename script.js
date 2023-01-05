"use strict";
console.log("test");
const num = document.querySelector('.number');
const btn = document.querySelector('.submit-btn');
const output = document.querySelector('.output');


function primeNumber(num) {
    num = Number(num);
    if (num <= 1 || num === isNaN || Number.isInteger(num) === false || num === "" || num === null) {
        return "Please enter a positive number greater than 1";
    }
    
    if (num === 2) {
        return 'Congratulations, this is the first prime number!';
    }
    if (num % 2 === 0) {
        return "No, it's a composite number :(";
    }

    let i = 3;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            return "No, it's a composite number :(";
        }
        i++;
    }
    return 'Yes, it is a prime number!';
}

btn.addEventListener('click', e => {
console.log("push");
    output.innerHTML = primeNumber(num.value);

});