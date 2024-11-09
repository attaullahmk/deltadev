// Every
// Return true if every Element of array gives true for some function. Else returns false.
// arr.every(every function defintion or name);

let a = [1, 2, 3, 4].every((el) => (el % 2 == 0));
console.log(a); //false
let b= [2, 6, 4].every((el) => (el % 2 == 0));
console.log(b); //true


// some
// return true if some Element of Array give true for some function. Else returns false.
//arr.some(some function definition or name);
console.log("for some ");
let some =[1, 2, 3, 4, 5].some((el) => (el % 2 == 0));
console.log(some); // true
let som =[1, 3, 5].some((el) => (el % 2 == 0));
console.log(som); // false