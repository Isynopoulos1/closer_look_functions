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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('👋🏽');
};

document.body.addEventListener('click', high5);

//pasa el evento a los 3 elementos del array
['isela', 'erwan', 'benito'].forEach(high5);
