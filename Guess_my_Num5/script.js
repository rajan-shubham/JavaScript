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
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!'
    }
})
