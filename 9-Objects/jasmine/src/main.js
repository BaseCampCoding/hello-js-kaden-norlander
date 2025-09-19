let scoreBoard = {
    "The Best Ever": 1000000,
};

let newPlayerName = `Kaden`;
let newPlayerScore = 50000;
scoreBoard[newPlayerName] = newPlayerScore;

let playerToRemove = `The Best Ever`;
delete scoreBoard[playerToRemove]

let playerNameToUpdate = `Kaden`;
let scoreToAdd = 20000;
scoreBoard[playerNameToUpdate] += scoreToAdd;

let mondayBonus = 100;
for (key in scoreBoard) {
    scoreBoard[key] += mondayBonus
}

console.log(scoreBoard)
