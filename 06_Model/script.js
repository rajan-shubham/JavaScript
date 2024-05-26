'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     console.log(btnsOpenModal[i].textContent);
// }

//////////////////////////////////////////
// WORKING WITH CLASSES WITH JS (LEC --> 80);
// event handeler and event listiner is preety much same thing 
// using classes and manipulating webpages, in practices adding and removing classes is the main way we change the style 

const openModal = function () {
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // modal.style.display = 'block';
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/////////////////////////////////////////////
// LEC--> 81 {HANDLING AN ESC KEYPRESS EVENT}

// Global Event --> no matter where this happen on this page it always triger the event handeler (listning for an event that happens any where)
// here we have three type of event on keyboard 
// 1> keyup --> this will happen when we lift off our hand from out key
// 2> keypress --> happen when we pressing the key and remain pressed
// 3> keydown --> happen when we press any key of keyboard

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
