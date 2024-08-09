'use strict';
/*
// lec --> 126 {Default parameter}
const bookings = [];

// default parameter can contains any expression like (price = 199 * 2) or (price = 199 * numPassenger)
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 3);
createBooking("LH123", 5);

// we cannot skip any parameter at function calling,
// so when we don't set a parameter or don't pass an argument then it will take the value of undefined,
// so specifing "undifined" here is same
createBooking("LH123", undefined, 1000);
*/
/*
///////////////////////////////
// lec --> 127 {how passing arguments works value vs. Reference}

const flight = "LH234";
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 2429898000923,
};

// here flightNum is contaion the copy of value not the original variable
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = "My. " + passenger.name;

    if (passenger.passport === 2429898000923) {
        alert("Checked In");
    } else {
        alert("Wrong passport!")
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight; // copying value
// const passenger = jonas; // copying reference

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);
// JS has only passing by value not passing by reference
*/
/*
////////////////////////////////////////
// lec --> 128 {First-Class and Higher-Order Functions}
// 1> First class functions 
// Function are just another "type" of object
// Function are simply vlues

// store function in variables or properties:
const add = (a, b) => a + b;
const counter = {
    value: 23,
    inc: function () { this.value++; },
}

// pass functions as arguments to OTHER fnction:
const greet = () => console.log("Hey, Shubham");
// btnClose.addEventListener("click", greet)

// Return functions FROM functions

// call methods on functions:
// counter.inc.bind(someOtherObject);

// 2> Higher order functions 
// a> A function that receive another function as an argument, that return an new function, or both 
// ex -> higher order fun. (addEventListener), which take call back fun. (greet)
// b> Function that returns new function
function count() { // count() is higher order fun.
    let counter = 0;
    return function () { // returned fun.
        counter++;
    };
}

let cout = count();
console.log(typeof(cout)); // function
*/
/*
/////////////////////////////////////
// lec --> 129 (Function Accepting callback functions)
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
// callbacks function helps alot it doing abstraction
// abstraction : hiding implementation
const high5 = function () {
    console.log("👋");
}
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5); 
*/
/*
/////////////////////////////////
// lec --> 130 {function Returning Functions}

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Shubham");

greet("Hello")("shubham");

// Challenge
const arrowGreet = (greeting) => (name) => console.log(`${greeting} ${name}`);
const namaste = arrowGreet("Namaste");
namaste("Rajan");
*/

//////////////////////////////////////
// lec--> 131 {The call and apply methods}
const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "Shubham Rajan");
console.log(lufthansa);

const eurowings = {
    airline: "Eurowings",
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book; // book function become normal function (so this method points to undefined when it is called as normaly/regularly)
// Does NOT work
// book(23, "Sarah William");

// Call method
book.call(eurowings, 23, "Sarah Williams")
// remember a function is just an objet, & objects have methods & therefore function can be have methods to.
console.log(eurowings);

book.call(lufthansa, 239, "Marry Cooper")
console.log(lufthansa);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

book.call(swiss, 583, "Marry Cooper");
console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData)

// Bind method
// book.call(eurowings, 23, "Sarah Williams")

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Sonali kumari");
bookEW23("Swarn Divya");

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application (preset parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// const addVAT1 = function (value) {
//     return addTax(0.23, value);
// }
// console.log(addVAT1(100));
// console.log(addVAT1(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));