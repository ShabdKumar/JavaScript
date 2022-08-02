/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */

console.log("Coding Challenge : 1");
console.log("--------------------");

const weightOfMark1 = 78, heightOfMark1 = 1.69, weightOfJohn1 = 92, heightOfJohn1 = 1.95;
const weightOfMark2 = 95, heightofMark2 = 1.88, weightOfJohn2 = 85, heightofJohn2 = 1.76;

const mark1BMI = weightOfMark1 / heightOfMark1 ** 2;
const mark2BMI = weightOfMark2 / heightofMark2 ** 2;
const john1BMI = weightOfJohn1 / heightOfJohn1 ** 2;
const john2BMI = weightOfJohn2 / heightofJohn2 ** 2;

// Data 1
let markHigherBMI = mark1BMI > john1BMI;
console.log("Data 1 Result: " + markHigherBMI); // Data 1 Result: true
// Data 2
markHigherBMI = mark2BMI > john2BMI;
console.log("Data 2 Result: " + markHigherBMI); // Data 2 Result: false