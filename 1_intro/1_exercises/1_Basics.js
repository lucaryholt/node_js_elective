// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My first name is " + firstName + " and my last name is " + lastName)

//Anden løsning, lidt gammel
console.log("My first name is %s and my last name is %s", firstName, lastName)

//Latifs løsning
//Bedre konvention
const introduction = "My first name is " + firstName + " and my last name is " + lastName;

console.log(introduction)

//Back tics (Mikes løsning)
console.log(`My first name is ${firstName} and my last name is ${lastName}`)


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2019";
const number = 1;

// Add the year plus the number
// The result should be 2020
// You cannot touch line 1 or 2

//Hvis man bruger parseInt() til "123abc", vil man få 123 ud af det

const result = parseInt(year) + number
console.log(result)

//Anden løsning:
//Hvis man bruger Number() til "123abc", får man NaN (not a number)

const currentYear = Number(year) + number;
console.log(currentYear)


// --------------------------------------