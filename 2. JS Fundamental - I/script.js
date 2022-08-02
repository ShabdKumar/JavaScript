let js = "amazing";
// if (js == 'amazing') alert("JavaScript is Fun!");
console.log(40 + 30 - 29);
let result = 40 + 30 - 29 ;
console.log(result);
console.log(js);

/* Values and Variables: */

let firstName = "Shabd";
console.log(firstName);
console.log(firstName);

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
console.log(firstJob);

/* Data Types: */

let javascriptIsFun = true; 
console.log(javascriptIsFun);
//boolean type
console.log(typeof javascriptIsFun);
console.log(typeof true);
//String type
console.log(typeof "true");
//number type
console.log(typeof 35);

//dynamic type
console.log(typeof javascriptIsFun);
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

//undefined type
let year;
console.log(year);
console.log(typeof year);
year = 1995;
console.log(typeof year);

//null type
console.log(null);
console.log(typeof null); //bug in javascript: showing object type

/* let, const & var keywords: */

//let keyword
let age = 30;
age = 31;
console.log(age);

//const keyword
const birthYear = 1995;
console.log(birthYear);
//birthYear = 2000; //Uncaught TypeError: Assignment to constant variable
//const birthYear1; //Uncaught SyntaxError: Missing initializer in const declaration

//var keyword
var job = "Engineer";
job = "Unemployed";
console.log(job);

//without declaration
lastName = "Sahu";
console.log(lastName);

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