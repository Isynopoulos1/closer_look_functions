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

lufthansa.planes = 300;

// this function adds +1 to 300 planes
lufthansa.buyPlane = () => {
  console.log('THIS', this);
  this.planes++;
  console.log('THIS PLANES', this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
