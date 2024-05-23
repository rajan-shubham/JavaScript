'use strict';
// JS going to interact with webpage(technical term -> DOM Manipulation)
// DOM -> Document Object Model: Structured representaion of HTML Documents. Allows JS to access html elements and styles to manipulate them.(manipulate means change text, Html Attributes, and even CSS Styles)
// DOM is already created by the browser as soon as the html pages loads and stored in tree structure.
// In Tree each HTML element is ONE Object
// document(html element) is the entry point to the DOM -> because we need to start selecting the elements
// DOM has all the notes of elements, text, comments, other stuffs
// Rule is that Whatever is in the HTML document also has to be in the DOM
// DOM !== JS :- DOM Methods and Properties for Dom Manipulation is NOT PART OF JS (JS is dialets of ECMA SCRIPT INTERNATIONAL)
// DOM nad DOM Methods are part of WEB API's
// WEB API's -> are like libraries that browsers impliment and that we can acess from our JS Codes (API -> application programming interface)
// web api's are libraries that are also written in JS(so that are automatically available to use)
// API's ex :- DOM Methods & Properties, Timers, FetchS

console.log(document.querySelector('.message').textContent);

// LEC --> 72 {SELECTING & MANIPULATING ELEMENTS}
/*document.querySelector('.message').textContent = "🎉 Correct Number!";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value);
*/
// lec --> 73 {Handeling click events}

// document.querySelector('.check').addEventListener('click', function () {
//     console.log(document.querySelector('.guess').value);

//     document.querySelector('.message').textContent = "🎉 Correct Number!";
// })
/*document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!'
    }
});
*/

// lec -> 74 {implementing the game logic}
// it is good to keep a variable actually holdes the data in out code, nout just rely on DOM to hold out data.
// this score variable is called [state variable], because this score is part of socalled application state.(relevent data to the application)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// lec-->78 {DRY/Refactoring our code}
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No Number!'
        displayMessage('⛔️ No Number!');


        // lec --> 75 {Manipulating css Styles}
        // when selecting anything in css, always use string as assignment purpose & property is in camelCase
        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = "🎉 Correct Number!";
        displayMessage("🎉 Correct Number!");
        
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
            
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You LOST the Game!';
            displayMessage('💥 You LOST the Game!');
            document.querySelector('.score').textContent = 0;
        }
        
        // when guess is too high
    }
//     else if (guess > secretNumber) {
//         if (score > 1) {
//         document.querySelector('.message').textContent = '📈 Too High!'
//         score--;
//         document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '💥 You LOST the Game!'
//             document.querySelector('.score').textContent = 0;
//         }

//         // When guess is too low
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//         document.querySelector('.message').textContent = '📉 Too Low!'
//         score--;
//         document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '💥 You LOST the Game!'
//             document.querySelector('.score').textContent = 0;
//         }
//     }
});


/////////////////////////////////////////////
// coding challange #1 {lec --> 76}

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').textContent = "?";

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    document.querySelector('.score').textContent = score;

    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage("Start guessing...");

    document.querySelector('.guess').value = '';// empty string -> absence of any value here

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
});