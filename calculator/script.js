const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation-btn button");
const clear = document.querySelector("#clear");
const input = document.querySelector("#input");
const ans = document.querySelector(".ans");

// practicing the Revealing Modern Pattern in JavaScript;
window.addEventListener("DOMContentLoaded", () => {
    input.value = 0;
});

// Using the IIFE to create private and public methods and variables
const mainFunctionality = (function () {

    let arrayNumbers = [];
    let latestInputValue;

    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            let value = number.value;
            arrayNumbers.push(value);
            latestInputValue = arrayNumbers.join("");
            input.value = latestInputValue;
        });
    });

    function getNumberOperation(input) {
        let splitedInput;
        let number1;
        let number2;

        if (input.includes("+")) {
            splitedInput = input.split("+");
            number1 = splitedInput[0];
            number2 = splitedInput[1];
        } else if (input.includes("-")) {
            splitedInput = input.split("-");
            number1 = splitedInput[0];
            number2 = splitedInput[1];
        } else if (input.includes("X")) {
            splitedInput = input.split("X");
            number1 = splitedInput[0];
            number2 = splitedInput[1];
        } else if (input.includes("/")) {
            splitedInput = input.split("/");
            number1 = splitedInput[0];
            number2 = splitedInput[1];
        } else if (input.includes("%")) {
            splitedInput = input.split("%");
            number1 = splitedInput[0];
            return { number1 };
        }

        else {
            alert("Sorry operation can't solved");
        }

        number1 = Number(number1);
        number2 = Number(number2)

        return { number1, number2 };
    }

    function add(number1, number2) {
        let result = number1 + number2;
        arrayNumbers = [];
        return result;
    }

    function multiply(number1, number2) {
        let result = number1 * number2;
        arrayNumbers = [];
        return result;
    }

    function substract(number1, number2) {
        let result = number1 - number2;
        arrayNumbers = [];
        return result;
    }

    function divide(number1, number2) {
        let result = number1 / number2;
        arrayNumbers = [];
        return result;
    }

    function percentage(number1) {
        let result = number1 / 100;
        arrayNumbers = [];
        return result;
    }

    return {
        getNumberOperation: getNumberOperation,
        add: add,
        multiply: multiply,
        divide: divide,
        substract: substract,
        percentage: percentage
    }

})();

// in the click event below we access only the methods that was returned in the mainFunctionality object above.
ans.addEventListener("click", () => {
    let result;
    let value = input.value;
    const { number1, number2 } = mainFunctionality.getNumberOperation(value);

    if (value.includes("+")) {
        result = mainFunctionality.add(number1, number2);
    } else if (value.includes("X")) {
        result = mainFunctionality.multiply(number1, number2);
    } else if (value.includes("-")) {
        result = mainFunctionality.substract(number1, number2);
    } else if (value.includes("/")) {
        result = mainFunctionality.divide(number1, number2);
    } else if (value.includes("%")) {
        result = mainFunctionality.percentage(number1);
    }

    if (Number.isInteger(result) === false) {
        result = result.toFixed(2);
    }

    input.value = result;
});

clear.addEventListener("click", () => {
    input.value = 0;
});