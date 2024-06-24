'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
//////////////////////////////////////////
// lec --> 110 {LoopingArrays_The for-of Loop}
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
};
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
};

// console.log([...menu.entries()]);
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
// const players1 = game.players[0];
// console.log(players1);
// const players2 = game.players[1];
// console.log(players2);
const [players1, players2] = game.players;
// const [players1, players2] = [...game.players]; // task(1)
// const check = [...game.players]; console.log(check.length) // -> 2;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1; // task(2)
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]; // task(3)
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'] // task(4)
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds; // task(5)
// const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = (...anyPlayers) => { // task(6)
  console.log(...anyPlayers, anyPlayers.length); 
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log(team1 > team2 && "team2" || "team1"); // task(7)
// by Jonas Sir
team1 < team2 && console.log('Team 1 is more likely to Win.');
team1 > team2 && console.log('Team 2 is more likely to Win.');
*/
/*
/////////////////////////////////////////
// lec --> 108 Nullish Coalescing Operator (__)

restaurant.numGuests = 0;
console.log(restaurant);
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish : null and undefined (Nullish Coalescing Operator it works with only nullish values, NOT Include 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0
*/
/*
/////////////////////////////////////////
// lec --> 107 {Short circuting}
// Use ANY data type, return ANY data type, short circuting
console.log("----OR----");
console.log(3 || "shubham"); // 3
console.log('' || "rajan"); // or oprator simply return a truthy value
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23; // restaurant.numGuests = 0; shouldn't be there as it make all expression an falsy value
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// practical example
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// OR --> return the first truthy value of all the all operands, or simply the last element if all the element is falsy value
console.log("----AND----");
console.log(0 && "Jonas"); // 0
console.log(5 && "Shubham"); // Shubhanm 

console.log("Hello" && 23 && null && "Jonas"); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
};

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')
// AND --> it return the first falsy value of all the operands, or the last value if all of them are truthy

// practical application --> we can use the "or" operator to set default value,
// and --> we can use to execute code of second operand if the frist operand is true
*/
/*
/////////////////////////////////////////
// lec --> 106 (Rest Pattern Parameters)
// Rest is to pack elements into an array 

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// rest pattern always must be the last in destructring assignment
// because, otherwise how JS will knwo when it should it collect the rest elements of the array
const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);

// Objects (remaining is collected into an object not in an array)
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// 2) Function
const add = function (...numbers) {
  // console.log(numbers); numbers in here an array because of REST operator
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", 'onion', 'olives', 'spinach');
restaurant.orderPizza("mushrooms");
*/

/*
///////////////////////////////////////
// The Spread Operator (...) lec-->105

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

let ingredients = [1, 2, 3, 4, 5];
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
/////////////////////////////////////////////////
// lec -> 104 {Destructuring Object}
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);*/
/* above code o/p:
Classico Italiano {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
Classico Italiano {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
[] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]
*/
/*
// Mutating varia9bles
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // Destructuring assignment in parenthesis because a & b are already declared
console.log(a, b);

// Nested objects
const { fri: {open, close} } = openingHours;
console.log(open, close);
*/



/*
/////////////////////////////////////////////////////
// lec--> 103 {Destructuring Arrays}
//  Destructuring Arrays--> it is a way (ES6 feature) of unpacking values from an array or an object into seprate variables(Breaking complex dataStructure in smaller dataStructure)

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Array Destructuring
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0); // array destructuring as the function return an array with 2 element
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // nested array destructuring
console.log(i, j, k);

// setting default values
const [p = 1, q = 1, r = 1] = [8, 9]; // when we don't know the actual size of array
// (how many element an array have we don't know) this happens when we get data from API
console.log(p, q, r);
*/
