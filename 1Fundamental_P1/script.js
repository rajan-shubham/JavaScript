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