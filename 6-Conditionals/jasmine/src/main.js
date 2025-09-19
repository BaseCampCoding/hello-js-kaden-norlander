let kind = [`car`]
let needLicenseResult;

if (kind === 'car' || kind === 'truck'){
    needLicenseResult = true
} else {
    needLicenseResult = false
}

let option1 = `s14`;
let option2 = `supra`;
let chooseVehicleResult;
if (option1 > option2) {
    chooseVehicleResult = option2 + ` is clearly the better choice.`
} else {
    chooseVehicleResult = option1 + ` is clearly the better choice.`
}

let originalPrice = 40000;
let age = 32;
let calculateResellPriceResult;
    if (age < 3) {
        calculateResellPriceResult = originalPrice * .8
    } else if (age > 10) {
        calculateResellPriceResult = originalPrice * .5
    } else {
        calculateResellPriceResult = originalPrice * .7
    }