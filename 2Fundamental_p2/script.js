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

/////////////////////////////////////////////
// LEC --> 036 {FUN. CALLING OTHER FUN.}
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));*/
/*
// LEC --> 037; {REVIEWING FUN.}

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }

    // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
//const calcAverage = (a, b, c) => (a + b + c) / 3;
const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
};

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins Win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas Win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No Teams Wins...`)
    }
}

checkWinner(avgDolphins, avgKoalas);

// functions are all independents at all (from where they called, from where they get inputs)
checkWinner(111, 576);

//test 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);*/

///////////////////////////////////////
// Introduction to Arrays (lec --> 039)
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1947, 1975, 1977, 1999);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', 'Alice']; assignment to constant variable is error

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1947, 1975, 1977, 1999, 2004];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);*/

// var x = 20;
// function foo() {
//     console.log(x);
//     let x = 10;
// }
// foo();

///////////////////////////////////////////////
// Lec --> 040 basic array operation(methods)
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add Element
const newLength = friends.push('Jay');
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']

friends.unshift('John');
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']


// Remove Elem.
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// Find
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false as include cheks with strict equality (===)

if (friends.includes('Steven')) {
    console.log("You have friend called Steven")
}*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//     // if (bill >= 50 && bill <= 300) {
//     //     return (bill * 0.15);
//     // } else {
//     //     return (bill * 0.20);
//     // }

//     return bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
// };
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
console.log(calcTip(100)); // 15;

const bills = [125, 555, 44];
console.log(bills); // (3) [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips); // (3) [18.75, 111, 8.8]

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[bills.length - 1] + tips[tips.length - 1])];
console.log(total); // (3) [143.75, 666, 52.8] */

////////////////////////////////////////
//LEC --> 042 {INTRO. TO OBJECTS}
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// object literal syntax
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
*/
// this object jonas has 5 property (property firstName which has value 'Jonas' & like wise all)

////////////////////////////////////////////
// LEC --> 043 (DOT VS. BRACKET NOTATION)

console.log('HELLO NODE');
// dot & bracket notation in JS used to assign and retrieve data from object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.firstName);
console.log(jonas['lastName']);
// in [] notation we can put any expression we would like

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey); --> wrong way

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const makaut = {
    name : 'maulana abul kalam azad university of technology',
    typeOfCollege : 'university',
    establish : 2000,
    affilatedCollegeNo : 200
};

// javascript arrays
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

if ( 14 >= 13) {
    sonsol.log(`14 is greater`);
}else{
    sonsol.log(`14 is smaller`);
}
