'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers // we turned a dynamic price
// ) {
//   //ES5 SINTAX
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH234');
// createBooking('LH234', 3);

// const flight = 'LH536';
// const isela = {
//   name: 'Isela Alarcon',
//   passport: 'G345673833',
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LY673';
//   passenger.name = 'Mrs' + passenger.name;

//   if (passenger.passport === 'G345673833') {
//     alert('checked in!');
//   } else {
//     alert('wrong password');
//   }
// };
// checkIn(flight, isela);
// console.log(flight);
// console.log(isela);

// // is the same as doing...
// const flightNum = flight;
// const passenger = isela;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(isela);
// checkIn(flight, isela);

// FUNCTIONS ACCEPTING CALLBACKS FUNCTIONS
// G IS FOR GLOBAL MODIFY
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// //TO SWITCH THE FIRST WORD TO UPPERCASE
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// console.log(upperFirstWord('hola, hola'));

// // /////////////////////// HIGHER ORDER  FUNCTIONS
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('javascript is the best! 2', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// //JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋🏽');
// };

// document.body.addEventListener('click', high5);

// //pasa el evento a los 3 elementos del array
// ['isela', 'erwan', 'benito'].forEach(high5);

// const exampleOneWorld = function (str) {
//   return str.replace(/ /g, '').toUpperCase();
// };

// const toLowerCaseExample = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toLowerCase(), ...others].join(' ');
// };

// const transformer2 = function (str, fn) {
//   console.log(`SOY UN STRING ${str}`);
//   console.log(`SOY UN STRING ${fn(str)}`);
// };
// transformer2('SOY Un EjEmplo', exampleOneWorld);
// transformer2('SOY Un EjEmplo 2', toLowerCaseExample);

// /////////////////////// CLOSURE FUNCTIONS

// const greet = gretting => {
//   return name => {
//     console.log(`${gretting} ${name}`);
//   };
// };

// SOLUTION 1 greet stored in a variable and assigning a name parameter
// const greetJonas1 = greet('hey');
// greetJonas1('jonas');

// SOLUTION 2 greet stored in a variable with both parameters on it
// const greetJonas2 = greet('hey')('jonas');

// EXPECTED OUTPUT hey jonas

// ///////////////////////THE CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iata: 'LHSY',
  bookings: [],
  // // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} airline booked a seat at ${this.airline} flight ${this.iata} ${flightNum}`
    );
  },
};

lufthansa.book(553, 'Isela Alarcon');

//OUTPUT EXPENCTED: Isela Alarcon booked a seat at lufthansa flight LHSY 553

const eurowings = {
  airline: 'eurowings',
  iata: 'THSS',
  bookings: [],
};
const book = lufthansa.book;
console.log(book);

// No va a funcionar llamar a la funcion book(23, 'isela)
// es una copia , se vuelve una funcion y ya no un método

book.call(eurowings, 445, 'erwan');
console.log(eurowings);

// también podemos hacer lo mismo llamando a la funcion lufthansa

book.call(lufthansa, 445, 'benito bb');

const newAirline = {
  airline: 'the new one',
  iata: 'TTUU',
  bookings: [],
};
book.call(newAirline, 662, 'bebe dudu');

// ///////////////////////APPLY METHOD - is not used anymore in modern js but works as the same as an spread operator

const flightData = [647, 'An old apply method'];
// book.apply(newAirline, flightData);
// console.log(newAirline);

book.call(newAirline, ...flightData);

// ///////////////////////BIND METHOD

const bookEW = book.bind(eurowings);
const bookLT = book.bind(lufthansa);

bookEW(23, 'eurowings');
bookLT(103, 'lufthansa');

// with event listeners

// this function adds +1 to 300 planes

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// /////////////////////// PARTIAL APPLICATION
const taxAgain = (rate, value) => value + value * rate;
// taxAgain();
console.log(taxAgain(0.1, 20));

const vatAgain = taxAgain.bind(null, 0.23);
//vatAgain = value => value + value * 0.23;
console.log(vatAgain(100));
// expected output: 123

// /////////////////////// FUNCTION INSIDE OTHER FUNCTION
const taxAgain2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const vatAgain2 = taxAgain2(0.23);
console.log(vatAgain2(100));

///////////////////////////////////////
// Coding Challenge #1

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

const poll = {
  question: 'whats your favorite programming language?',
  options: ['0: JS', '1: Python', '2: Rust', '3: C++'],
  //this generates [0,0, 0, 0].
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //get answer
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join('.\n')}
      \n write option number`
      )
    );
    console.log(answer);

    //register answer
    typeof answer === 'number' &&
      answer < this.answers.lenght &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// /////////////////////// IIFE (INMEDIATLEY INVOKE FUNCTION EXPRESSIONS)

const functionExample = function () {
  console.log('Im a function');
};
functionExample();

// ///////////////////////to call a regular function without name
(function () {
  console.log('Im a function');
})();

// ///////////////////////to call an arrow function without name
(() => console.log('Im a function'))();

// /////////////////////// Scope in a private variable stored in a function

{
  //const imStuck = 'this is my secret value';
  var imStuck = 'this is my secret value';
}
// console.log(imStuck);
console.log(imStuck);
