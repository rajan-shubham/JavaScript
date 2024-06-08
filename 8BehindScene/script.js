'use strict';
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating New variable with same name as outer scope's variable
            const firstName = "Steven";
            
            // Reassigning outer acope's variable
            output = "NEW OUTPUT!";
            
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str); ReferenceError: str is not defined
        console.log(millenial); // var is functional scoped
        // console.log(add(2,3)); // ReferenceError: add is not defined (function are only blocked scoped(true for strict mode))
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = "shubham";
calcAge(1991);
// const firstName = "rajan"; // ReferenceError: Cannot access 'firstName' before initialization
// console.log(age); ReferenceError: age is not defined
// printAge(); ReferenceError: printAge is not defined
*/

/*
// LEC --> 95 {HOISTING & TDZ in Practice}

// variables
console.log(me); // --> undefined
//console.log(job); // ReferenceError: Cannot access 'job' before initialization
//console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization(for const) {TypeError: addExpr is not a function(for var)}
console.log(addArrow);
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization(for const) {TypeError: addExpr is not a function(for var)}

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}
// Just Don't use var to declare variables, use const most of the time, and let if you really need to change the variable latter
// also in order to write clean code --> you should declare all your variable at the top of the scope
// declare all your function first, and use them after the declaration only

*/
/*
var x = 1;// it will create a property on global window object
let y = 2;
const z = 3;
// window object is the global object of JS & WebBrowser

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/


/*
// lec 96 {this keyword}

const jonas = {
    name: 'Jonas',
    year: 1991,
    calcAge: function () {
        return 2037 - this.year; // way better then using jonas.year
    }
}

const shubham = {
    name: 'Shubham',
    year: 2004
}
console.log(jonas.calcAge())
*/
/*
// lec--> 97 {this keyword practice}
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // Arrow fun. does not get their own this keyword
    // so here arrow this keyword uses lexical scoping(finding variable in it's parent function)
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();
//For method cll: when the method call happen the this keyword inside of the method will be the object that is calling the method (int this case the jonas object(jonas is the owner of the method))

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; // this is callde method borrowing (copy the method from one object to other)
matilda.calcAge(); // 20

const f = jonas.calcAge; // taking out the method and putting to a variable
console.log(f); // [Function: calcAge]

//f(); // TypeError: Cannot read properties of undefined (reading 'year') {as f() is just a regular function call (it is not attached to any object (there is no owner of this functin f() at this point))}
*/

/*
// lec --> 98 {regular fun. VS arrow fun.}
// var firstName = 'Matilda'; // this is creating a property in window Object (hence cant't use var to declare variable)

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    clacAge: function () {
        // console.log(this); // {firstName: 'Jonas', year: 1991, clacAge: ƒ, greet: ƒ}
        console.log(2037 - this.year); // 46

        // Solution 1 for method within a method
        // const self = this; // self or that
        // const isMillenial = function () {
        //     console.log(self); // {firstName: 'Jonas', year: 1991, clacAge: ƒ, greet: ƒ}
        //     console.log(self.year >= 1981 && self.year <= 1996); // true
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // (A Regular function call --> has the this keyword set to undefined)
        // isMillenial();

        // Solution 2 for method within a method is Arrow function(uses the this keyword from it's parent scope)
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    },

    greet: () => {
        console.log(this); // pointing to window object
        console.log(`Hey ${this.firstName}`);
    }
};
jonas.greet(); // Hey undefined
console.log(this.firstName); // undefined
jonas.clacAge();


// just like the this keyword ARGUMENTS KEYWORD is only available in regular function
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 7, 8);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
// addArrow(2, 3, 4, 5, 6); // ReferenceError: arguments is not defined
*/
/*
// lec --> 91 Primitives vs. Objects{Primitives vs Reference types}
// ex primitives --> Numbers, String, Boolean, Undefined, Null, Symbol, Bigint
// ex objects(Refrence types) --> Object literal, Arrays, Functions, etc...
// in JS Engine --> all the objects are stored in HEAP
// in JS Engine --> all the Primitives are stored in call stack(STACK) (stored in execution context in which they are declared)

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log((oldAge)); // 30



const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log("Friend: ", friend); // Friend:  { name: 'Jonas', age: 27 }
console.log("Me: ", me); // Me:  { name: 'Jonas', age: 27 }

// Primitive --> Identifier -> age, Address -> 0001, value -> 30(spesified at 0001 mem. add.) (is stored in JS in STACK)
// Object --> Identifier -> me, Address -> 0003, Value -> D30F (in STACK); Address -> D30F, Value { name: 'Jonas'; age: 30;} (in HEAP)

// JS Topic for later:
// Prototypal Inheritance --> OOP with JS
// Event Loop --> Asynchronous JS: Promises, Asyns/Await and AJAX
// How the DOM Really Works --> Advanced DOM and Events
*/

// lec --> 100 {Primitive Vs. Object in Practice}
// primitives types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference type
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);
// marriedJessica = {}; it will completely change the ref. that is pointing by thi earliear (so this is wrong)

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2); // it will create a shallow copy(copy only first level of object not object within a object(for 2nd level of object it will pointing to the same object)) not a whole clone of an object 
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push('Mary');
jessicaCopy.family.push("John");

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);