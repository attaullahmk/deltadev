// Lexical Scope
// a vraible defined outside a function can be accessible inside another function defined after the variable declaration.
//use in nested function concept
// The opposite is NOT true

function calculate() {
  let c = 23;
  let d = 3;
  function sum() {
    // function scope not use outer the function calculate
    console.log(d);
    let m = 23;
    console.log(g);

    return d;
  }
  // console.log(m); // it will give erorr b/c not access out of function
  let g = 34; // this is possible due to hoisting
  console.log(sum());
  // let g = 34; // if write later than function call the give error
  return 0;
}
calculate();
// google  hoisting
// console.log(calculate());

// also clouser ?





// lecture 13 practice but easy no need to see

// type of function in js ? 📝
// Function expressions are not hoisted?
// what is generator functions and use in real life code ... ? z





// lecture 14
// function expression (waye of writing function)
// nameless funtion
// const variable = function (ar1, ar2) {
//     //do something or return
// }
//actually this is nameless function >> function (ar1, ar2) {
//     //do something or return
// }

const sum = function (a, b) {
  return a + b;
};
console.log(sum(3, 4));
// sum is not function it variable which store value of function











// lecture 15
// Higher Order function
// a function that does one or both:
//  * takes one or multiple function as arguments
//  * returns a function

//takes one or multiple functions as arguments
function multipleGreet(func, n) {
  // higher order function
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greet = function () {
  console.log("hello");
};

// dircet funtcion also pass
// multipleGreet(()=>{ console.log("hi");} , 3)
// multipleGreet(greet, 3); // 3 time hello
// function pass as a value...send argument as a defination not to execute like greet()





// A higher-order function is a function that either:
// Takes one or more functions as arguments, or
// Returns a function as its result.

// Example: Array Methods like map, filter, and reduce






// lecture 16
// higher order function
// return a function
// oddEvenTest is factory function
// factory  function is a function which create other function
function oddEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request");
  }
}

let s = oddEvenTest("odd"); // it retrun defination of the function 
console.log(s(37)); // true 


//isClosure ?

//Yes, this is a closure because the inner function, returned from oddEvenTest, maintains access to the request parameter from the outer function even after the outer function has finished executing.




//also factory func 
// What is a Factory Function?
// A factory function is a function that returns a new object or function (like in your case) when invoked. In JavaScript, it is used to create multiple instances of similar objects or functions, each customized based on the input parameters.

// In your example, the factory function is oddEvenTest, which produces different "checker" functions based on the input ("odd" or "even").