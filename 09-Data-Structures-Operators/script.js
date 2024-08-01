'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    // Remenber if we use the variable name as the property name, basically we use the bracket notation
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[4+1]]: { // or [`day-${2+4}`]
      open: 0, // Open 24 hours
      close: 12 + 12, // or close: 24
    },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Older then ES6
  // openingHours: openingHours,

  // ES6 enhansed object literals(create a property name with exactly that variable name)
  openingHours,

  //   order: function (starterIndex, mainIndex) {
  //       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
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

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// by Jonas Sir
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});


document.querySelector("button").addEventListener("click", () => {
  const text = document.querySelector("textarea").value;
  const names = text.split("\n");

  for (let naam of names) {
    // console.log(naam);
    console.log(camelCase(naam));
  }

  // console.log(names);
  // console.log(text);
});

const camelCase = function (name) {
  const [first, second] = name.split("_");
  return [first, second.replace(second[0], second[0].toUpperCase())].join("");
};

// console.log(camelCase("first_name"));

/*
/////////////////////////////////////
// lec -> 122 { Working with String part - 3}
// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastNmae] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastNmae.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
}

capitalizeName("jessica ann smith davis");
capitalizeName("shubham rajan");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Rajan".padStart(20, "$").padEnd(30, "$"));


const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
}

console.log(maskCreditCard(363326454363344242));
console.log(maskCreditCard(4363344242));
console.log(maskCreditCard("226897982676279226789"));

// Repeat
const message2 = "Bad Weather... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"🛩️".repeat(n)}`);
}
planesInline(5);
planesInline(3);
planesInline(13);
*/
/*
//////////////////////////////////////
// lec -> 121 { Working with String part - 2}
const ariline = "TAP Air Portugal";

console.log(ariline.toLowerCase());
console.log(ariline.toUpperCase());

// Fix capitalization in Passenger name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// string replacing
const priceGB = "288,97&";
const priceUS = priceGB.replace("&", "$").replace(",", "."); // create new string not mutate original one // 288.97$
console.log(priceUS);

const announcement = "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));
// regular expression -> /door/g (g is for global variable)

// Booleans 
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You anr NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
}
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");*/
/*
///////////////////////////////////////
// lec --> 120 {Working with string (part-1)}
const ariline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // A
console.log("B737"[0]); // B

console.log(ariline.length); // 16
console.log("B737".length); // 4

console.log(ariline.indexOf("r")); // 6
console.log(ariline.lastIndexOf("r")); // 10
console.log(ariline.indexOf("Portugal")); // 8 (it is case scensitive)

// these methods always return a new string
console.log(ariline.slice(4)); // subString --> Air Portugal
console.log(ariline.slice(4,7)); // Air (7 exclusive) {lengt of extracted is always (7 - 4) = 3}

console.log(ariline.slice(0, ariline.indexOf(" ")));
console.log(ariline.slice(ariline.lastIndexOf(" ") + 1));

console.log(ariline.slice(-2));
console.log(ariline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1)
  if (s === "B" || s === "E")
    console.log("You got the middle seat 😅");
  else console.log("You got lucky 😎");
}

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
// whenever we called string method, JS behind the scene convert string primitive to string object with the same content --> Boxing

console.log(new String("jonas"));
console.log(typeof new String("jonas"));
// when operation is done string object is converted back to string primitive

console.log(typeof new String("jonas").slice(1));
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*//*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())]; // task(1)
console.log(events);

gameEvents.delete(64); // task(2)
console.log(gameEvents);

// let average = 0;
// for (let [minute,] of [...gameEvents]) {
//   average += minute;
// }
// average /= [...gameEvents.keys()].length;

console.log(`An Event happened, on average, every ${90 / gameEvents.size} minutes`); // task(3)
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
); // bonus

for (let [minute, event] of gameEvents) {
  console.log(`[${minute <= 45 ? "FIRST" : "SECOND"} HALF] ${minute}: ${event}`);
} // task(4)*/
/*
////////////////////////////////////////////
// lec --> 117 {Maps_Iteration}
const question = new Map([
  ["question", "What is the best programming language in the world?"], 
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if(typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(question.get(answer === question.get("correct")));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

console.log([...weekdays.entries()]);
*/
/*
/////////////////////////////////////////////
// lec --> 116 Maps_Fundamental
const rest = new Map();
rest.set("name", "Classico Italialon");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest.set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set("open", 11).set("close", 23).set(true, "We are open :D").set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector('h1'), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
/*
/////////////////////////////////////////////
// lec --> 115 {Sets}
// sets is just a collecton of unique values
// sets can hold mix of data types
// sets are look similar with an array
// sets are also iterable
// it's elements are unique, and order of elements in a set is irelevent

const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza",]);
console.log(orderSet);

console.log(new Set('Shubham'));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order); // set is iterable

// main use case of set is to remove duplicate values from arrays
// Example
const staff = ['Waiter', "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// wanted to know how many unique positon's
console.log(
new Set(['Waiter', "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("shubhamrajan")); // no. of diff. char in my name
*/
///////////////////////////////////////
// Coding Challenge #2 LEC==> 114

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
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
/*
// task(1)
const scored = Object.entries(game.scored);
console.log(scored);
let goal = 0
for (const [ , name] of scored) {
  console.log(`Goal ${goal+=1}: ${name}`);
}
for (const [i, player] of game.scored.entries()) // by jonas sir
  console.log(`Goal ${i+1}: ${player}`);

// task(2)
const odds = Object.values(game.odds)
console.log(odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
const avg = sum / odds.length;
console.log(avg);
let average = 0; // by jonas sir
for (const odd of Object.values(game.odds))
  average += odd;
average /= Object.values(game.odds).length;
console.log(average);

// task(3)
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);

for (const [team, odd] of Object.entries(game.odds)) { // by jonas sir
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'draw:' : `victory ${game[team]}:`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
/*
//////////////////////////////////////////
// lec --> 113 {Looping Objects-> Object keys, values, and Entries}
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); //(3) ['thu', 'fri', 'sat']


// console.log(`We are open on ${properties.length} days.`);
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr); //We are open on 3 days: thu, fri, sat, 

// Properties VALUES
const values = Object.values(openingHours);
console.log(values); // 0: {open: 12, close: 22}1: {open: 11, close: 23}2: {open: 0, close: 24}length: 3[[Prototype]]: Array(0)

// Entries object
const entries = Object.entries(openingHours);
console.log(entries); // (3) [Array(2), Array(2), Array(2)]0: (2) ['thu', {…}]0: "thu"1: {open: 12, close: 22}length: 2[[Prototype]]: Array(0)1: (2) ['fri', {…}]2: (2) ['sat', {…}]length: 3[[Prototype]]: Array(0)


// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}
*/
/*
//////////////////////////////////////////
// lec --> 112 (Optional Chaining)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Method (if it exist before we call it)
console.log(restaurant.order?.(0,1+1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0,2) ?? "Method does not exist");

// Array (basically we check it is empty)
const users = [
  { name: "Shubham", email: 'hello@shubham.in' }
];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/
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
