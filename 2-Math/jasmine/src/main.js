let ratePerHour = 60;
let dayRate = ratePerHour * 8;

let budget = 1000;
let workdays = Math.floor(budget / dayRate);

let billable = 22;
let monthlyDiscount = .8;
let fullMonths = Math.floor(35 / billable);
let remainingDays = 35 - billable;
let discountedMonthlyRate = dayRate * billable * monthlyDiscount;
let remainingCost = dayRate * 13;
let totalProjectCost = Math.round(remainingCost + discountedMonthlyRate);