let juiceName = `cranberry`;
let timeToMixJuiceResult = true;
while (timeToMixJuiceResult == true) {
    if (juiceName == `Pure Strawberry Joy`) {
        timeToMixJuiceResult = 0.5
    }
    else if (juiceName == `Energizer` || juiceName == `Green Garden`) {
        timeToMixJuiceResult = 1.5
    }
    else if (juiceName == `Tropical Island`) {
        timeToMixJuiceResult = 3
    }
    else if (juiceName == `All or Nothing`) {
        timeToMixJuiceResult = 5
    } else {
        timeToMixJuiceResult = 2.5
    }
}

let wedgesNeeded = 10;
let limes = [`small`,`medium`,`large`];
let wedgesCut = 0;
let limesCut = 0;
let i = 0;
while (wedgesNeeded > wedgesCut && i < limes.length) {
    if (limes[i] == `small`) {
        wedgesCut += 6
    }
    else if (limes[i] == `medium`) {
        wedgesCut += 8
    }
    else if (limes[i] == `large`) {
        wedgesCut += 10
    }
    limesCut++
    i++
}


i = 0;
let timeLeft = 50;
let orders = [`Pure Strawberry Joy`, `Energizer`, `Green Garden`, `Tropical Island`, `All or Nothing`];
let remainingOrders = []
while (timeLeft > 0) {
    if (orders[i] == `Pure Strawberry Joy`) {
        timeLeft -= 0.5;
        i += 1;
        if (timeLeft < 0) {
            remainingOrders.push(`Pure Strawberry Joy`);
            timeLeft = 0;
        }
    } else if (orders[i] == `Energizer`) {
        timeLeft -= 1.5;
        i += 1;
        if (timeLeft < 0) {
            remainingOrders.push(`Energizer`);
            timeLeft = 0;
        }
    } else if (orders[i] == `Green Garden`) {
        timeLeft -= 1.5;
        i += 1;
        if (timeLeft < 0) {
            remainingOrders.push(`Energizer`);
            timeLeft = 0;
        }
    } else if (orders[i] == `Tropical Island`) {
        timeLeft -= 3;
        i += 1;
        if (timeLeft < 0) {
            remainingOrders.push(`Tropical Island`);
            timeLeft = 0;
        }
    } else if (orders[i] == `All or Nothing`) {
        timeLeft -= 5;
        i = 0;
        if (timeLeft < 0) {
            remainingOrders.push(`All or Nothing`);
            timeLeft = 0;
        }
    }
}