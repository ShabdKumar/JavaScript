/* Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country(population in millions)
2. Log their values to the console */

console.log("Assessment: Values and Variables");
console.log("--------------------------------");

let country = "India";
let continent = "Asia";
let population = 1417;
console.log(country); // India
console.log(continent); // Asia
console.log(population); // 1417

/* Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

console.log("Assessment: Data Types");
console.log("----------------------");

let isIsland = false;
let language;
console.log(typeof isIsland); // boolean
console.log(typeof population); // number
console.log(typeof country); // string
console.log(typeof language); // undefined

/* let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens */

console.log("Assessment: let, const and var");
console.log("------------------------------");

language = "Hindi";
const country1 = "India";
const continent1 = "Asia";
const isIsland1 = false;
//isIsland1 = true; //Uncaught TypeError: Assignment to constant variable

/* Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese */

console.log("Assessment: Basic Operators");
console.log("---------------------------");

const splitPopulation = population / 2;
console.log(splitPopulation); // 708.5

population++;
console.log(population); // 1418

const populationFinland = 6;
console.log(population > populationFinland); // true

const avgPopulation = 33;
console.log(population < avgPopulation); // false

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description); // India is in Asia, and its 1418 million people speak Hindi


/* Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */

console.log("Assessment: Strings and Template Literals");
console.log("---------------------------");

description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description); // India is in Asia, and it's 1418 million people speak Hindi