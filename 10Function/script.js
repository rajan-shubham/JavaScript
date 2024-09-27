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
/*
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
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
///////////////////////////////////////
// lec ==> 133 // Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
      // Get answer
      const answer = Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
      );
      console.log(answer);
  
      // Register answer
      typeof answer === 'number' &&
        answer < this.answers.length &&
        this.answers[answer]++;
  
      this.displayResults();
      this.displayResults('string');
    },
  
    displayResults(type = 'array') {
      if (type === 'array') {
        console.log(this.answers);
      } else if (type === 'string') {
        // Poll results are 13, 2, 4, 1
        console.log(`Poll results are ${this.answers.join(', ')}`);
      }
    },
  };
  
  document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));
  
  poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
  
  // [5, 2, 3]
  // [1, 5, 3, 9, 6, 1]
*/
/*
// lec --> 134
///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
/*
///////////////////////////////////////
// lec --> 135
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


///////////////////////////////////////
// lec --> 136
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

///////////////////////////////////////
// lec --> 137
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/