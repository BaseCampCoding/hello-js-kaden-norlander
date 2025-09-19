let position = 9;
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getItemResult = stack[position];

position = 8;
let replacementCard = 11;
stack[position] = replacementCard;

let newCardTop = 21;
stack.unshift(newCardTop);

stack.splice(3, 1);

stack.splice(0, 1);

let newCardBottom = 18;
stack.push(newCardBottom);

stack.splice(10, 1)

let stackSize = stack.length;
let checkSizeOfStackResult = true; 
    if (stackSize = false) {
        checkSizeOfStackResult = false
    }

console.log(checkSizeOfStackResult)


