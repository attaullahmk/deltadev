// Fuction in JS
// function defination (telling js )
// function functionName() {
//     //do some thing
// }
// function heloow() {
//     console.log("hi and hellow to every one");
// }

// // function calling(using the function )
// heloow();






// lecture 2
// print poem sample no need to write







// lecture 3
// practice
// create  a function to roll a dice and always display the value of the dice ( 1 to 6);

function roll() {
    let num = Math.ceil(Math.random() * 6);
    // console.log(num);
    return num;
}


// console.log(roll())

// console.log(roll())

// console.log(roll())

// console.log(roll())






// lecture 4
// function with arguments
// values we pass to the function
//order is very important to pass function
// function sum(a, b) {
//     let sum = a + b;
//     return sum;
// }
// console.log(sum(2, 3));
// console.log(sum(9, 3));
// console.log(sum(2, 4));









// lecture 5
// practice
// create a function that gives us the average of 3 numbers
// very sample sol self





// lecture 6
// practice
// create a function that print the multiplication table of a number.
// very sample sol self

function table( num) {
    for (let i = 1; i < 16; i++){
        console.log(i , " * ", num, " = " , i * num);
    }
}

// table(5);




// lecture 7
// Return
// return keyword is used to return some value from the function
// after return rest of the code not execute 
function sum(a , b) {
    return a + b;
}
let jama =sum(sum(2, 3), 4);
console.log(jama);




// lecture 8
// create a function that return the sum of numbers from 1 to 10.






// lecture 9
// create a function that return the concatenetion of all string in an array.

let str = ['hi ', 'to ', 'evry ', 'one'];
function strin(str) {
    let result = "";
    for (let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;

}

console.log(strin(str));














// lecture 10
// scope
// scope determines the accessibility of variables, objects, and functions from different parts of the code.


// function
// block
// lexical
// Global scope : noramal variable


// function
// Varible defined inside a function are not accessible (visible) from outside the function.
let g = 4; //Global scope it mean use in where in the file
function sumcal(a, b) {
    // let g = 3; 
    console.log(g); // it will print the funtion g if it not exist than print out of function g mean 4
    let sum = a + b;
    var c = 33;
     return sum;
}
// console.log("c value ", c); // give erro even you define using var keyword
// console.log(sumcal(2, 3));
// console.log(sum); // that will give error b/c sum is define only in function



// , block scope and function scope determine the accessibility of variables based on where they are declared.

// Block Scope (let, const): Variables are confined to the block where they are defined. Ideal for controlling the visibility of variables within a specific code block.

// Function Scope (var): Variables are confined to the entire function in which they are defined. Less restrictive than block scope and can lead to unintended consequences if used within nested blocks.







// lecture 11
// Block Scope
// Variables declared inside a {} block cannot be accessed from outside the block.
// 2015 later introduce const and let keyword

{
  let x = 34; // it not print outside
  var y = 3; // but it print outside 
  
}
// console.log(x);
// console.log(y);

let age = 23;
if (age < 20) {
    let under = "under ten"
}
// console.log(under); // it will give erorr undefine

