// miscellaneous topics
//arrow function can not use as standalone is noraml fuc the must to be store in variable 
// Arrow function
// const func = (arg1, arg2)=>{
// function defination
// }


// arrow function are nemaless function
// use as callback(as a argument for other function) or normal variable 
const sum = (a, b) => {
    console.log(a + b);
}


// console.log(sum(3, 5));
// if in arrow function argument is one than pranthisis is optional but no argument than must to write 
let cube = n => {
    return n * n * n;
}
let fun = () => {
    console.log("without ()");
}
fun();
console.log(fun());  // if you console.log() any function the not retrun than undifne print every time
//Since the function does not explicitly return any value, it implicitly returns undefined
console.log(cube(3));






// an arrow function if one value than pranthesis is optional


// lecture 4
// implicit return
// implicit return mean return value only no other task print , calcuate etc 

// if write value in arrow function it mean the value implicitly return if no other task do (print  etc)
// const func = (arg1, arg2)(
    //value// implicitly return mean self retrun no need write to retrun 
// )

// implicit return syntax 
// this code use to write small code easy and less apace
const mul = (a, b) => 
    a * b
    ;
// ( ) brackt use for implicit function 
// const mul2 = (a, b) => (console.log(`${a} and ${b}`));
const mul2 = (a, b) => ((`${a} and ${b}`)); // to make implicit

console.log(mul(3,4));
console.log(mul2(3, 4));


// explicit mean  to tell some thing (write return keyword)




// Implicit Return:

// When using the concise body syntax of arrow functions (i.e., without curly braces {}), the expression following the arrow => is implicitly returned.
// In this case, a * b is the expression, and its result is automatically returned by the function.
// No return Keyword:

// Since the function is written in concise form, you don’t need to explicitly write the return keyword. The return value is inferred directly from the expression.


// const mul = (a, b) =>
//     a * b;

// const mul = (a, b) => {
//     return a * b;
// };
// Both versions of the function will return the result of a * b. as above


//summary
// Implicit Return: Arrow functions with a single expression return the result of that expression implicitly.
// Concise Syntax: The return keyword is not needed when using the concise body syntax.