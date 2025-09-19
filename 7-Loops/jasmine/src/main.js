let birdsPerDay = [2,3,6,7,4,9,1];
let total = 0;
for (let i = 0; i < birdsPerDay.length; i++) {
    total += 1
}


let week = 1;
let daysPerWeek = 7;
let weekStart = (week - 1) * daysPerWeek;
let weekEnd = (week * daysPerWeek);
let weekTotal = 0;

for (let i = weekStart; i < weekEnd && i <= birdsPerDay.length; i++) {
    weekTotal += birdsPerDay[i]
}

for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1
}

console.log(birdsPerDay)