'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;

    /* https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML */
    containerMovements.insertAdjacentHTML("afterbegin", html);
    
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
/////////////////////////////////////////////////
// lec --> 140 {simple Array Methods}
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE --> does not mutate array (give new array)
console.log(arr.slice(2)); // (cde)
console.log(arr.slice(2, 4)); // length of result array is (4-2) = 2 (cd)
console.log(arr.slice(-2)); // (de)
console.log(arr.slice(-1)); // (e)
console.log(arr.slice(1, -2)); // (bc)
// slice method used to shallow copy of an array
console.log(arr.slice()); // (abcde)
console.log([...arr]); // both the above two method do the same thing but slice is used in chaining of methods

// SPLICE --> mutates the array & (give new array)
// console.log(arr.splice(2));
arr.splice(-1); // splice mainly used to remove (last) elements {remain: abcd}
arr.splice(1, 2); // {remain: ad} // syntax: arr.splice(from where, no. of elements)
console.log(arr);

// REVERSE --> Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT --> Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // same thing by array decomposition (spread operator)

// JOIN
console.log(letters.join(" -> "));
*/

/////////////////////////////////////////
// lec --> 141 Looping Arrays_ forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH ----"); // forEach is a higher order function
movements.forEach(function (move, i, arr) {
  if (move > 0) {
    console.log(`Movement ${i+1}: You deposited ${move}`);
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(move)}`);
  }
});

//NOTE: in forEach loop => we can't use break; continue; statement

///////////////////////////////////////
// lec --> 142 {at method}
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian National Rupee'],
]);

console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR", "INR", "INR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`); // here key and value are exactly the same
});
*/