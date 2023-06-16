let js = "amazing";
// if (js == 'amazing') alert("JavaScript is Fun!");
console.log(40 + 30 - 29); // 41
let result = 40 + 30 - 29;
console.log(result); // 41
console.log(js); // amazing

/* Values and Variables: */

let firstName = "Shabd";
console.log(firstName); // Shabd
console.log(firstName); // Shabd

// Variable Conventions
let firstPersonName = "Akash";
let $first = "kumar";
let name = "Kumar Akash";
let PI = 3.1415;
let first123 = "Nikki";
let firstJob = "Associate Software Engineer";
let currentJob = "FrontEndDeveloper";
let job1 = "Associate Software Engineer";
let job2 = "FrontEndDeveloper";
let _first = "name";
console.log(firstJob); // Associate Software Engineer

/* Data Types: */

let javascriptIsFun = true;
console.log(javascriptIsFun); // true
// boolean type
console.log(typeof javascriptIsFun); // boolean
console.log(typeof true); // boolean
// String type
console.log(typeof "true"); // string
// number type
console.log(typeof 35); // number

// dynamic type
console.log(typeof javascriptIsFun); // boolean
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun); // string

// undefined type
let year;
console.log(year); // undefined
console.log(typeof year); // undefined
year = 1995;
console.log(typeof year); // number

// null type
console.log(null); // null
console.log(typeof null); // object /*bug in javascript: showing object type*/

/* let, const & var keywords: */

// let keyword
let age = 30;
age = 31;
console.log(age); // 31

// const keyword
const birthYear = 1995;
console.log(birthYear); // 1995
// birthYear = 2000; //Uncaught TypeError: Assignment to constant variable
// const birthYear1; //Uncaught SyntaxError: Missing initializer in const declaration

// var keyword
var job = "Engineer";
job = "Unemployed";
console.log(job); // Unemployed

// without declaration
lastName = "Sahu";
console.log(lastName); // Sahu

/* Basic Operators: */

// Math Operators
const currentYear = 2022;
const ageShabd = currentYear - 1995;
const ageAkash = currentYear - 1999;
console.log(ageShabd, ageAkash); // 27 23
console.log(ageShabd * 2, ageAkash / 2, 2 ** 3); /* 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 */  // 54 11.5 8

const Name = "Shabd";
const sirName = "Sahu";
console.log(Name + " " + sirName); // Shabd Sahu
console.log(Name + 2); // Shabd2

// Assignment Operators
let x = 10 + 5;
x += 10; /* x += 10 means x = x + 10; */
x *= 4; /* x *= 4 means x = x * 4; */
x++; /* x++ means x = x + 1; */
x--; /* x-- means x = x - 1; */
x--;
console.log(x); // 99

// Comparison Operators >, <, >=, <=
console.log(ageShabd > ageAkash); // true
console.log(ageAkash >= 21); // true
const isMarriageAge = ageAkash >= 21;
console.log(isMarriageAge); // true
console.log(currentYear - 1995 > currentYear - 1999); // true

/* Operator Precedence: */

console.log(currentYear - 1995 > currentYear - 1999); // true

let y, z;
y = z = 25 - 10 - 5; /* y = z = 10; y = 10; */
console.log(y, z); // 10 10

let averageAge = ageShabd + ageAkash / 2;
console.log(averageAge); // 38.5
averageAge = (ageShabd + ageAkash) / 2;
console.log(averageAge); // 25


/* Strings and Template Literals: */

const fullName = "Shabd Kumar";
const yearOfBirth = 1995;
const ongoingJob = "Assosiate Software Engineer";
const presentYear = 2022;

// strings
const details = "I'm " + fullName + ", a " + (presentYear - yearOfBirth) + " year old " + ongoingJob;
console.log(details); // I'm Shabd Kumar, a 27 year old Assosiate Software Engineer

// template literals
const detailsNew = `I'm ${fullName}, a ${presentYear - yearOfBirth} year old ${ongoingJob}`;
console.log(detailsNew); // I'm Shabd Kumar, a 27 year old Assosiate Software Engineer

console.log(`Just a regular statement...`); // Just a regular statement...

// multiple lines statement

console.log("This is not \n\ a proper way \n\ to handle multiple line.");
/* This is not 
 a proper way 
 to handle multiple line. */

console.log(`This is the
proper way
to handle multiple line.`)
 /* This is the
proper way
to handle multiple line. */

/* Taking Decisions: if / else Statements */

const personAge = 15;

if (personAge >= 18) {
    console.log("Sarah can start driving 🚗");   
} else {
    console.log(`You need to wait ${18 - personAge} more years to get driving licence.`) // You need to wait 3 more years to get driving licence.
}

const birthYear = 1992;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`You were born in ${century} century.`) // You were born in 20 century.


/* Type Conversion and Type Coercion */

// Type Conversion

const birthYear = "1992";

console.log(birthYear + 18);    // 199218
console.log(Number(birthYear) + 18, birthYear);    // 2010 '1992'
console.log(birthYear);  // 1992

console.log(Number("Jonas"));   // NaN
console.log(typeof NaN);    // number

console.log(String(23), 23);    // 23 23

// Type Coercion

console.log("I'm " + 28 + " years old.");   // I'm 28 years old.
console.log("I'm " + "28" + " years old."); // I'm 28 years old.
console.log("23" - "10" - 3);   // 10
console.log("23" - "10" - "3"); // 10
console.log("23" + "10" + 3);   // 23103
console.log("23" * 2);  // 46
console.log("23" * "2");    // 46
console.log("23" / 2);  // 11.5
console.log("23" / "2");    // 11.5

let n = "1" + 1;    /* '11' */
n = n + 1;          /* '111' */
n = n - 1;          /* 110 */
console.log(n); // 110

console.log(2 + 3 + 4 + "5");   // 95
console.log("10" - "4" - "3" - 2 + "5");    // 15


/* Truthy and Falsy Values */

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));    // false
console.log(Boolean(-5));   // true
console.log(Boolean(10));   // true
console.log(Boolean(''));   // false
console.log(Boolean('Shabd'));  // true
console.log(Boolean(undefined));    // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN));  // false
console.log(Boolean({}));   // true     /* empty object */

let money = 0;
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job.");   // You should get a job.
}

money = 100;
if (money) {
    console.log("Don't spend it all."); // Don't spend it all.
} else {
    console.log("You should get a job.");
}

let height = undefined;
if (height) {
    console.log("YAY! Height is defined.");
} else {
    console.log("Height is undefined.");    // Height is undefined.
}

height = 123;
if (height) {
    console.log("YAY! Height is defined."); // YAY! Height is defined.
} else {
    console.log("Height is undefined.");
}

height = 0;
if (height) {
    console.log("YAY! Height is defined.");
} else {
    console.log("Height is undefined.");    // Height is undefined.
}

/* Equality Operators: == vs. === */

const age = 18;
if (age === 18) console.log("You just became an adult. (strict equality)"); // You just became an adult. (strict equality)
if (age == 18) console.log("You just became an adult. (loose equality)");   // You just became an adult. (loose equality)

console.log(18 === 18); // true
console.log(18 == 19);  // false
console.log(18 === '18');   //false
console.log(18 == '18');    // true

const favNumber = prompt("What's your favourite number ?"); // What's your favourite number ? 23 ↲
console.log(favNumber); // 23
console.log(typeof favNumber);  // string

if (favNumber == 23) {  /* '23' == 23  -> true */
    console.log("Cool! 23 is an amazing number.");  // Cool! 23 is an amazing number.
} else if (favNumber == 7) {
    console.log("7 is a cool number.");
} else {
    console.log('"Number is not 23 or 7');
}

if (favNumber !== 23) { /* '23' !== 23  ->  true (strict not equal)*/
    console.log("Why not 23 ?");    // Why not 23 ?
}