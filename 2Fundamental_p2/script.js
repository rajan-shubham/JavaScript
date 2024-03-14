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

//////////////////////////////////////////
// LEC --> {034} (FUNCTION DECLERATION VS. EXPRESSION)
/*
//function decleration
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);


//function expression (as expression produce value, so we just assign value produced in variable calcAge2)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// in JS FUNCTION IS NOT A TYPE(like string number), BUT IT IS VALUE
// DIFF. B/W fun. dec. & fun. exp.
// practical diff. --> we can actually call fun. dec. before they are defined in the code
*/
/////////////////////////////////////////
// LEC --> 035 {ARROW FUNCTIONS}
/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));*/