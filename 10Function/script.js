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

////////////////////////////////////////
