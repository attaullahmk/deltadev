// Hoisting(raising / top ) means JavaScript moves variable declarations to the top of their scope (the top of the function or file). However, let and const behave differently than var when it comes to hoisting.

//just for understanding
// var m = 23;
// console.log(m);
// var m = 23;

// let c;
// var d;
// console.log(c);
// console.log(d);
// Temporal Dead Zone (TDZ) ?
// https://chatgpt.com/share/ff0cebb6-fda4-4efd-83e7-2ddbd4c0b51d   // must read this again



//lecture 1 
// JS Object literals
// used to store keyed collection and complex entities.
// property => (key, value ) pair
// Object are a collection of properties
let arr0 = []
console.log(typeof arr0);  // object so Object broad term


// Object vs Object literals  (google )

// ### 1. **Object (Constructor)**
// - Created using `new Object()`.
// - Example:
//   ```js
//   let obj = new Object();
//   obj.name = "John";
//   ```
// - Less commonly used in modern JavaScript.


// ### 2. **Object Literal**
// - Created using `{}` (curly braces).
// - Example:
//   ```js
//   let obj = { name: "John", age: 30 };
//   ```
// - Easier, shorter, and most commonly used.

// ### Key Difference:
// - **Object Constructor**: `new Object()`
// - **Object Literal**: `{ key: value }`

// Object literals are faster and more convenient, so they are used more often.







// lecture 2
// js Object literals example
let delhi = {
    latitude: "28.23 N",
    longitude: "2345 E "
};
// console.log(delhi);
const student = {
    nam: "atta",
    age: "22",
    marks: "90",
    color: ["red", "pink"]
    //obj also have array 
};

console.log(student);
const arr = ["atta", 22, 90];
console.log(arr);

// object have not order if print while array have order if print in browser
// object also have reference as like array
// change value in const obj while as whole object not change



// object also have reference as like array ?

// Objects and arrays are both reference types in JavaScript.
// When you assign an object or array to a variable, you're not copying the actual data, but a reference (or link) to the original object or array.
// So, if you modify the object or array through one variable, the changes will be reflected in all variables that reference that same object or array.


let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 is a reference to obj1

obj2.name = "Bob"; // Modify through obj2
console.log(obj1.name); // Output: Bob (obj1 is also changed)


//array 
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 is a reference to arr1

arr2.push(4); // Modify through arr2
console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is also changed)


// Both objects and arrays are reference types.
// Changes made through one reference affect all other references to the same object or array.







// lecture 3
// Thread / Twitter post
// create an object literal for the properties of thread / twitter post which includes -
// username
// content  likes  reposts  tages

let twitterPost = {
  username: "atta" ,
    content: "this my first post",
    likes: "234",
    reposts : 9,
    tages: "post"
};



// lecture 4
// GET Values 
// let student = {
//     name: "mk",
//     marks: 67
// };

// // both method use to acces object Element
// console.log(student["name"]);
// console.log(student.name);
// console.log(student.marks);





// lecture 5
// Get values
// JS automatically converts objects keys to strings.
// Even if we made the numbers as a key, the numbers will be converted to string.
// than use 
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};


console.log("object", obj[1]); //if use in .. 1 first convert into string than use all in the above obj key
// console.log(obj.1)  //it give erorr and rest of the work
// console.log(obj.true);
// console.log(obj.null);
// console.log(obj.undefined);





// lecture 6
// add/ udate value
// change the city to "Mumbai"
// Add a new property , gender: "famale"
// change the marks to "A"

// const student = {
//     name: "salman",
//     age: 23,
//     marks: 23,
//     city: "lahor"
// };

console.log(student);
student.marks = "A";
console.log(student);
student.gernder = "Male";
console.log(student);
// delete a value 
console.log("delete marks ");

delete student.marks;
console.log(student);
delete student; // this not work for whole obj 
console.log(student);


var obje = {
    H: "salam", 
    jan: "sahab"
}
console.log(obje.H);
// delete obje.H;
delete obje; // that not work to delete all the obj and one value delete is possible 
console.log(obje.H);


/// search > how many way to access obj value in javascript

// Summary
// Dot notation: object.property
// Bracket notation: object["property"]
// Destructuring: Extract properties as variables.
// For loop: Iterate over the object properties using for...in.
// Object.values(): Get an array of values.
// Object.keys(): Get an array of keys to access the values.
// Object.entries(): Iterate over key-value pairs.
// Optional chaining: Safely access nested properties.
// Map: Use when keys are not limited to strings or symbols.