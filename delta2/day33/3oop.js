// Object Oriented Programing
// to structure our code
// prototypes
// new operator
// constructors
// classes
// keywords (extends, super)







// if create Object key repeat for every 
const stu1 = {
    name: "adnan",
    age: 23,
    marks: 89
}
const stu2 = {
    name: "iqrar",
    age: 13,
    marks: 89
}
const stu3 = {
    name: "framn",
    age: 22,
    marks: 88
}
// best way  to use template do not repeat



// lecture 4
// object prototypes
// prototypes are the mechanism  by which js objects inherit features from one another. It is like a single template object that all objects inherit methods and properties from without having ther own copy.

// create obj like array all the array property inherite form it prototype which normal comman in all array obj as push pop indexOf the already define in prototype

// arr.__proto_         (reference)(copy)
// Array.prototype     (actual object)
// string.portotype

// notes
// every object in js has a built-in property, which is called its prototype. the prototype is iteself an object, so the prototype will have its own prototype, making what's called a prototype chain. The Chain ends when we reach a prototype that has null for its own prototype.
// child ---> parent ---> grandparent ---> null


let arr = [1, 3, 4, 5, 6];
arr.sayhello = () => {
    // this function will print if you open in browser
    console.log("hi every one")
}
console.log(arr);

let arr2 = [ 2,3,4]; // for that not print sayhelo(); function b/c the are not define for arr2 array the only cantain prototype method and property but in arr the individual define for array
arr2.push(3); //here but now below form wich change defination of push 
console.log(arr.__proto__) //acces the prototype of object

// if you change defination of push for obj (array)  like
arr.__proto__.push = (n) => {
    console.log("pushing number : ", n);
};
arr.push(4); // than it not work for as noraml push work for array
arr2.push(3)// change definition fo push now push not work 
console.log(arr);
console.log(arr2);

// actual prototype of obj
console.log(Array.prototype);


// if you  compare function of two obj which define for same type obj than show false b/c two different obj create for them value are different(individual define )

arr1.sayhello = () => {
  console.log("hi every one");
};
arr.sayhello = () => {
  console.log("hi every one");
};

console.log(arr.sayhello===arr1.sayhello); //fase the have diff space in memory


// . How to Get true?
// If you want the comparison to return true, you need to make sure both objects reference the same function in memory, like this:

// const arr = {};
// const arr1 = {};

// // Create one function
// const sayhelloFunction = () => {
//   console.log("hi everyone");
// };

// // Assign the same function to both objects
// arr.sayhello = sayhelloFunction;
// arr1.sayhello = sayhelloFunction;

// // Compare the two functions
// console.log(arr.sayhello === arr1.sayhello);  // Output: true

// Here, both arr.sayhello and arr1.sayhello point to the same function in memory, so the comparison returns true.

// Summary:
// Two separately defined functions, even with the same code, are treated as different because they occupy different memory spaces.
// To get true when comparing functions, both objects must reference the same function in memory.

















// but for prototype are same as
"abc".toUpperCase === "xyz".toUpperCase // true b/c the referance same toUppercase(same for both define onece in prototype) property 
