'use strict';
// strict use to write more secure code (secure means strict mode makes it easier for developers to avoid accendital errors(avoid bugs))
/*
//LEC --> 032 {ACTIVATIOG STRICT MODE}
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'; //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:10:7)
// const private = 456;
// const if = 23; //Uncaught SyntaxError: Unexpected token 'if'
*/
///////////////////////////////////
// LEC --> 033 {FUNCTIONS}

// FUNCTION --> A PIECE OF CODE WHICH WE CAN USE OVER AND OVER AGAIN
/*
function logger() {
    console.log('My name is Shubham');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');*/