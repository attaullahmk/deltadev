// lectur 1
// string methods
// methods - actions that can be performed on objects.
// format
// stringName.method()





// leacture 2
// str.trim()
// Trims whitespaces from both ends of string and returns a new one.
// let str1 = "    hi every one   "

// console.log(str1);
// str2 =str1.trim();
// console.log(str2);




// leacture 3
// string are immutable in js
// no changes can be made to strings.
// whenever we do try to make a change, a new string is created and old one remains same.






// leacture 4
// let str = "hi string";
// let b = str.toUpperCase();
// let b = str.toLowerCase();
// console.log(b);






// leacture 5
// String Methods with Arguments
// Argument is a some value that  we pass to the method.
// Format
// StringName.method(arg)

// indexof
// return the first index of occurrnece of some value in string. Or gives -1 if not found.

// let str = " hi string";

// let ind = str.indexOf("ring");
// console.log(ind);
// if not found the return -1







// lecture 6
// Method chaining
// using one method after another. Order of execution will be left to right.

// let chi = str.toUpperCase().trim();
// console.log(chi);






// lecture 7
// slice
// return a part of the original string as a new string
// let str = "hi every one ";
// let sls = str.slice(4);
// let sls = str.slice(4,6);
// let sls = str.slice(-3); // (length - num)

// console.log(sls);


// google substring method



// lecture 8
// replace method
// search a value in the string and return a new string with the value replaced.

let strr = "I love coding ";

let rep = strr.replace("love", "pyar");
console.log(rep);


// repeat
// return a string with the number of copies of a string

let string = "mangor  ";
let rept = string.repeat(3);
console.log(rept);





