/*let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// 40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23)
let firstName = "Jonas";
console.log(firstName)

let Jonas_matilda = "JM";
let $function = 8; // start reserve keyword with _ or $ for variable name use
let PI = 3.1415; // constants variable name is written with al capital letters

let myFirstJob = "Coder";
let myCurrentJob = "Teacher"; // better style

let job1 = "Programmer";
let job2 = "Teacher"; // good style

console.log(myFirstJob, myCurrentJob);*/
/*
// <lec->012>, Data & Types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true)
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log('jonas');

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(null)
console.log(typeof "anurag")
*/
/*
// <lec->013>, let,const and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = "Rajan";
console.log(lastName);*/
/*
// <lec->014>, BASIC OPERATOR

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operaters
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4;// x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparision Operators
console.log(ageJonas > ageSarah); // >, <, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // line 87 & 92 is same*/
/*
//<LEC->015> {Operator Precedence}

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);*/
// Operator precedence -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
/////////////////////////////////////////////////
// LEC-016 CODING CHALLENGE #1
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


// let marksWeight = 78; //kg
// let marksHeight = 1.69; //meter tall 
let marksWeight = 95; //kg
let marksHeight = 1.88; //meter tall 
let marksBmi = marksWeight / marksHeight ** 2;
console.log(marksBmi);


// let johnWeight = 92;
// let johnHeight = 1.95;
let johnWeight = 85;
let johnHeight = 1.76;
let johnBmi = johnWeight / (johnHeight * johnHeight);
console.log(johnBmi);

let marksHigherBMI = marksBmi > johnBmi;
console.log(marksHigherBMI);*/

/*
//////////////////////////////////////////////
// LEC ->017 {STRING & TEMPLETE LITERALS}

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// multiline string before ES6
console.log('String with \n\
multiple \n\
lines');
// multiline string after ES6
console.log(`String
with
multiple
line`);*/

/*
/////////////////////////////////////////////
//LEC --> 018 {IF/ELSE statement}
const age = 13;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving licence 🚗`);
} else {
    const yearsLeft = 18 - age;
    //console.log(18 - age);
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

////////////////////////////////
//LEC --> 19 
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/*
let marksWeight = 95; //kg
let marksHeight = 1.88; //meter tall 
let marksBmi = marksWeight / marksHeight ** 2;
console.log(`Mark's BMI : ${marksBmi}`);

let johnWeight = 85;
let johnHeight = 1.76;
let johnBmi = johnWeight / (johnHeight * johnHeight);
console.log(`John's BMI : ${johnBmi}`);

if (marksBmi > johnBmi) {
    console.log(`Mark's BMI (${marksBmi}) is higher than John's (${johnBmi})!`);
} else {
    console.log(`Jons's BMI (${johnBmi}) is higher than Mark's (${marksBmi})!`);
}*/

////////////////////////////////////
//LEC --> 020 {TYPE CONVERSION & COERCION}
// type conversion -> when we mannualy convert from one type to another.
// type coercion -> when JS automatically converts one type to another
/*
//type conversion
const inputYear = `1991`;
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`))// o.p-> Not a Number
console.log(typeof (NaN));
console.log(String(23), 23);

//type coercion
console.log(`i'm ` + 23 + ` years old`);// String+Number -> String
console.log(`I'm ` + String(23) + ` years old.`);
console.log(`23` - `10` - 3); // - trigger in opposite way of + operator
console.log(`23` * `2`);
console.log(`23` / `2`);
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n); // -> 10
console.log(2 + 3 + 4 + '5');// -> 95

console.log('10' - '4' - '3' - 2 + '5'); //-> 15*/
/*
/////////////////////////////////////
// LEC --> 21 {TRUTHY & FALSE VALUES}

//False values --> values that are not exactly false but will become when we try to convert them into a boolean 
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));// empty object

const money = 0;
if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED ");
}*/
/*
////////////////////////////////////////
//LEC --> 022 {EQUALITY OPERATORS == VS ===}

const age = '18';
if (age === 18) console.log("You just became an adult.(strict)");
if (age == 18) console.log("You just became an adult.(loose)");

// === : is strict comp. equality operator, and does not perform type coercion

console.log(18 === 18, 18 === 19); // true , false
// == : is loose comp. equality operator, and does type coercion 
console.log('18' == 18, '18' === 18); // true , false
// loose equality (create many bugs so generally avoide it)

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) { // if '23' == 23 --> true
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9');
}

// != : loose not equal to; !== : strict not equal to
if (favourite !== 23) {
    console.log('Why not the 23?');
}*/
/*
/////////////////////////////////////////////
//LEC -> 023 {BOOLEAN LOGIC}
//BOOLEAN LOGIC -> uses true and false to solve complex logical problem
const age = 16;
if (age >= 20 || age < 30) {
    console.log("Sarah age is in adult.");
}

console.log(!0);*/
/*
/////////////////////////////////////////////
//LEC --> 024 {LOGICAL OPERATOR}

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}*/

////////////////////////////////////
//LEC --> 025 {CODING CHALLENGE 3}
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
/*
//quest 1,2
const dolphinAvgScore = (96 + 108 + 89) / 3;
console.log(dolphinAvgScore);

const koalasAvgScore = (88 + 91 + 110) / 3;
console.log(koalasAvgScore);

if (dolphinAvgScore > koalasAvgScore) {
    console.log("Team Dolphin won.🏆")
} else if (dolphinAvgScore < koalasAvgScore) {
    console.log("Team Koala won.🏆");
} else {
    console.log("🏆Tie between team Koala & DolphinDolphin🏆");
}


//quest 3
const dolphinAvgScore1 = (97 + 112 + 101) / 3;
console.log(dolphinAvgScore1);

const koalasAvgScore1 = (109 + 95 + 123) / 3;
console.log(koalasAvgScore1);
if (dolphinAvgScore1 > koalasAvgScore1 && dolphinAvgScore1 >= 100) {
    console.log("Team Dolphin won.🏆")
} else if (dolphinAvgScore1 < koalasAvgScore1 && koalasAvgScore1 >= 100) {
    console.log("Team Koala won.🏆");
} else if (dolphinAvgScore1 === koalasAvgScore1 && dolphinAvgScore1 >= 100 && koalasAvgScore1 >= 100) {
    console.log("Tie between team Koala & Dolphin");
} else {
    console.log("No team win the game.")
}


//quest 4
const dolphinAvgScore2 = (97 + 112 + 101) / 3;
console.log(dolphinAvgScore2);

const koalasAvgScore2 = (109 + 95 + 106) / 3;
console.log(koalasAvgScore2);
if (dolphinAvgScore2 > koalasAvgScore2 && dolphinAvgScore2 >= 100) {
    console.log("Team Dolphin won.🏆")
} else if (dolphinAvgScore2 < koalasAvgScore2 && koalasAvgScore2 >= 100) {
    console.log("Team Koala won.🏆");
} else if (dolphinAvgScore2 === koalasAvgScore2 && dolphinAvgScore2 >= 100 && koalasAvgScore2 >= 100) {
    console.log("🏆Tie between team Koala & DolphinDolphin🏆");
} else {
    console.log("No team win the game.")
}*/
/*
///////////////////////////////////////////
//LEC -->026 {SWITCH STATEMENT}

const day = "monday";

switch (day) {
    case "monday": // day === 'monday'
        console.log("Plan course strucrture");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/
///////////////////////////////////////////
//LEC -->27 {statemnets & expressions}

// Expression --> it a piece of code that produces a value
// ex: 3 + 4;
// 1991; this is a value (but this is expression as it produce value)
// ex: true && false && !false; --> produce boolean value

// Statement --> it is a big piece of code which executed & not produces value on itself
/*
if (23 > 10) {// if else statement
    const str = "23 is bigger"; // str is expression
}

const me = 'aman';
console.log(`I'm ${2037 - 1991} years old ${me}`);*/

//////////////////////////////////////////////
//LEC --> 028 {CONDITIONAL(TERNARY) OPERATOR}

//conditional operator --> allow us to write similar to an if else statement but all in one line
/*
const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water💧.")
// operater always produces a value(as it is an expression) like here ternary operator.

const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}.`);*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
/*
const bill = 400;
let tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);*/