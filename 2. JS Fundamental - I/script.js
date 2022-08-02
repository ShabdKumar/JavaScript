let js = "amazing";
// if (js == 'amazing') alert("JavaScript is Fun!");
console.log(40 + 30 - 29); // 41
let result = 40 + 30 - 29 ;
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
console.log(firstJob); // Associate Software Engineer

/* Data Types: */

let javascriptIsFun = true; 
console.log(javascriptIsFun); // true
//boolean type
console.log(typeof javascriptIsFun); // boolean
console.log(typeof true); // boolean
//String type
console.log(typeof "true"); // string
//number type
console.log(typeof 35); // number

//dynamic type
console.log(typeof javascriptIsFun); // boolean
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun); // string

//undefined type
let year;
console.log(year); // undefined
console.log(typeof year); // undefined
year = 1995;
console.log(typeof year); // number

//null type
console.log(null); // null
console.log(typeof null); // object /*bug in javascript: showing object type*/

/* let, const & var keywords: */

//let keyword
let age = 30;
age = 31;
console.log(age); // 31

//const keyword
const birthYear = 1995;
console.log(birthYear); // 1995
//birthYear = 2000; //Uncaught TypeError: Assignment to constant variable
//const birthYear1; //Uncaught SyntaxError: Missing initializer in const declaration

//var keyword
var job = "Engineer";
job = "Unemployed";
console.log(job); // Unemployed

//without declaration
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

//Assignment Operators
let x = 10 + 5;
x += 10; /* x += 10 means x = x + 10; */
x *= 4; /* x *= 4 means x = x * 4; */
x++; /* x++ menas x = x + 1; */
x--; /* x-- menas x = x - 1; */
x--;
console.log(x); // 99

//Comparison Operators >, <, >=, <=
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