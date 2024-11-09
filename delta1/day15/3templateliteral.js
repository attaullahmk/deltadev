// template Literals
// they are used to add embedded expressions in a string.

// let a = 5;
// let b = 10;
// back ticks

// console.log(`price is ${a * b} done`)



// lecture 4
// Operators in JS
// very simple no need for explination


// lecture 5
// Comparison OPeraters
// comprision opretor use to compare two values
// eg >< =>
// type and value comparison
let t = 0 == ''; // true
let t2 = 0 === ''; // false
let t3 = 0 == false; // true
let t4 = 0 === false; // false
let t5 = null === undefined; // false




// lecture 6
// Comparison for NON-numbers
// let a = 'a';
// let b = 'c';
// let c = 'B';
// let d = "b";
// 'a' -> 61, 'b' ->62
// 'A' -> 41 , 'B' -> 42
// google javaScript unicode
// in javaScript non-number comparison also possible on the base of the unicode number

// console.log(c < d);
// console.log(a > b);








// lecture 7
// Conditional Statements
// if-else
// nested if-else
// switch




// lecture 08
// if Statement
// if is keyword in js
// some code before if
// if (some codition ) {
//     //do something
// }
// some code after if
// console.log(" code before the if statement ");
// let a = 2;
// let b = 5;
// if (a < b) {
//     console.log("a is less than b ");
// }
// console.log(" code after  the if statement ");



// lecture 9
// practice Qs
// Create a trafic light system that shows what to do based on color.

// let color = "green";

// if (color == "red") {
//     console.log("Stop");
// }
// if (color == "green") {
//     console.log("you can go ");
// }

// if (color == "yellow") {
//     console.log("care");
// }



// logic is that if you convert real word problem to code


// lectur 10
// else if Statement


// if (condition) {
//     // Do something
// }
// else if (condition) {
//     // Do something else
// }
// else if (condition) {
//     // do something else
// }

// exampale try self

// if first condition is true than not check the second and so on condition

// let age = 23;
// if (age > 18) {
//     console.log(" you can vote");
// }
// // if condition in which the two condition is true than only first one is check and do some task of condition first
// else if (age < 18) {
//     console.log (' you can not vote ')
// }



// lecture 11
// else Statement
// if (condition) {
//     // do somethin
// }
// else {
//     //do something
// }

// very simple else case no conditon check it do if all the above condition is false




// lecture 12
// practice Qs
// create a system to calculate popcorn prices based on the size customer asked for :
// if size is "XL" , price is Rs . 250
// if size is "L" , price is Rs . 200
// if size is "M" , price is Rs . 100
// if size is "S" , price is Rs . 50

// use else if statement to convert code



// lecture 13
// nesting is writing if-else inside if-else statements. It can have manu levels.

// so simple no need for explination



// lecture 14
// Logical Operators
// logical operators to combine expressions

// and &&  or|| not! ... pip symbol |
// not opretor reverse the value
// condition check form left to right  logical operator
// so simple



// lecture 15
// practice QS
// Qs A "good string " is a string that starts with the letter 'a' and has length > 3. Write a program to find if a string is good or not.

// try self easy

// let str = "aw";
// let go = str.length;
// let fc = str[0];
// if (fc == "a" && go < 4) {
//     console.log("good string ");
// }







// lecture 16
// Truthy and falsy
// in js  every value have is boolean value this true or false depends on the value some have fales and some have true value
// Everything in Js is true of false (in boolean context).
// This  doesn't mean their value itself is false or true, but are treated as false or true if taken in boolean context.

// Falsy values
//negative value false 
// false, 0, -0, 0n(BigInt value), ""(empty string), null, undefined, NaN

// if this value not compare with other the show false as following

// if (0) {
//     console.log("this is true ")
// }
// else {
//     console.log(" this is false ")

// }


// Truthy values
// " " also true b/c of space in quots if not space its false
// everything else

// if (8) {
//   console.log("this is true ");
// } else {
//   console.log(" this is false ");
// }











// lecture 17
// switch Statement
// used when we have some fixed values that we need to compare to.
// let color = 'red'
// switch (color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("do");
//         break;
//     default:
//         console.log("broken down");
// }


// lecture 18
// Practice Qss
// use the switch  statement to print the day of the week using a number variable "day" with valus 1 to 7.
// 1= monday , 2 = tuesday
// try self



// lecture 19
// alert and prompt
// alert dispalys an alert message on the page.
// alert(" someting is wrong ";);



// prompt dispalys a dialog box that asks user for some input .
// prompt(" please enter your no .");


// console.error("hi this show erorr");
// this will show as red in console as log
// console.warn("this is warning ");
// console show msg with warning




// write a  program to check if 2 numbers have the same last digit . 
// let a = "2";
// let b = "33344";
// let a = "wer";
// let b = "der";

// // in case of string this method is use to 
// let c = a.length
// let d = b.length
// if (a[c - 1] == b[d - 1]) {
//     // this is bad approch




// // if ((a%10 ) == (b %10)){
//     console.log(" last digit is same", a%10);
// }
// else {
//     console.log ( "not same the last digit ")
// }



























