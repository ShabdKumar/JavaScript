let js = "amazing";
// if (js == 'amazing') alert("JavaScript is Fun!");
console.log(40 + 30 - 29);
let result = 40 + 30 - 29 ;
console.log(result);
console.log(js);

// Values and Variables:

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

// Data Types

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

// let, const & var keywords

let age = 30;
age = 31;
console.log(age);
//const
const birthYear = 1995;
console.log(birthYear);
//birthYear = 2000; //Uncaught TypeError: Assignment to constant variable
//const birthYear1; //Uncaught SyntaxError: Missing initializer in const declaration
//var
var job = "Engineer";
job = "Unemployed";
console.log(job);
//withoout declaration
lastName = "Sahu";
console.log(lastName);