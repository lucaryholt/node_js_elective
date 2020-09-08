// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console

//console.log(letters[1]);


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.

friends.push({ name: 'Peter' }, { name: 'Jens' }, { name: 'Mads' });

//console.log(friends);


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value.

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value).

const indexOfNumber = significantMathNumbers.indexOf(1729);

//console.log(indexOfNumber);


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger", "soda", "pizza");


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.

diet.pop();



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.

const dinnerTray = [...diet];
const dinnerTray1 = diet.slice();

// --------------------------------------
// Exercise 7 - For loop

const letters0 = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for (let i = letters0.indexOf('b'); i < letters0.length; i += 2) {
    //console.log(letters0[i]);
};

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

//for loop med turnery operator

// for(let i = 0; i < numbers.length; i++){
//     let n = numbers[i];
//     (n < 0 || n > 6) ?
//         console.log(n) :
//         discardedNumbers.push(n);
// };

//for loop uden med if else

// for(let i = 0; i < numbers.length; i++){
//     let n = numbers[i];
//     if(n < 0 || n > 6){
//         console.log(n);
//     }else{
//         discardedNumbers.push(n);
//     };
// };

//med map

// numbers.map((num) => {
//     if(num < 0 || num > 6){
//         console.log(num);
//     }else{
//         discardedNumbers.push(num);
//     }
// });

//med filter

test = numbers.filter((num) => {
    if(num < 0 || num > 6){
        console.log(num);
    }else{
        return num;
    }
});

console.log(test);

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------
