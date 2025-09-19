const { version } = require("react");

let visitorName = `Kaden`;
let visitorAge = 18;
let visitorTicketId = "H4";
let visitor = {
    name: visitorName,
    age: visitorAge,
    ticketId: visitorTicketId,
}

visitor.ticketId = null;

let tickets = {
    "H4": "Kaden",
    "H5": null,
}

let ticketIdToCheck = "H5";
let ticketStatusResult; 
if (tickets[ticketIdToCheck] === undefined) {
    ticketStatusResult = "unknown ticket id"
} else if (tickets[ticketIdToCheck] === null) {
    ticketStatusResult = "not sold"
} else {
    ticketStatusResult = `sold to ${visitor.name}`
}

let simpleTicketStatusResult;
if (tickets[ticketIdToCheck] === null || tickets[ticketIdToCheck] === undefined) {
    simpleTicketStatusResult = "invalid ticket !!!"
} else {
    simpleTicketStatusResult = visitor.name
}

let visitorWithGtc = {
    gtc: {
        version: "V3.0"
    },
}

let gtcVersion;
if (visitorWithGtc.gtc.version === undefined) {
    gtcVersion = undefined
} else {
    gtcVersion = `hello`;
}
console.log(gtcVersion)