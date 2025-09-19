let digits1 = [1, 7, 3];
let digits2 = [2, 6, 9];
let number1 = digits1.join('');
let number2 = digits2.join('');
let twoSum = Number(number1) + Number(number2);

let luckyInput = 23432;
let luckyInputStr = String(luckyInput);
let luckyNumber;
if (luckyInputStr.split('').reverse().join('') === luckyInputStr) {
    luckyNumber = true
} else {
    luckyNumber = false
}

let userInput = `kaden`;
let errorMessage;
if (userInput === null || userInput === undefined || userInput.length === 0) {
    errorMessage = "Required field"
} else if (Number(userInput) == 0) {
    errorMessage = "Must be a number besides 0"
} else {
    errorMessage = ""
}