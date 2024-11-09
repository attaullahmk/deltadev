// Reduce
// reduce the array to a single value
//it depend the logic you write in function
// arr.reduce(reducer function with 2 variables for (accomulator, Element ));

// if write one value no need to write return key word in arow function
let red = [1, 2, 3, 4].reduce((res, el) => {
    console.log(res); // first value it is 1
    console.log(el); // first value is 2 
    // if value one than it not print as above 1 and 2 
     return res + el;  // 10

    //for understanding
    // console.log(res);
    // return el;  // 
    // return res;  // 3 
});
console.log("value", red); //10  or 4




// lecture 5
// Finding maximun in an array 
let nums = [1, 2, 3, 4, 5, 5, 6];

// using for loop 
let max = -1;
for (let i = 0; i < nums.length; i++){
    if (max < nums[i]) {
        max = nums[i];
    }
};

// console.log("max using for loop ", max);


// let nums = [1, 2, 3, 4, 5, 5, 6];
let result = nums.reduce((max, el) => {
    console.log(el,max); // JUST  for understanding 
    if (el > max) {
        return el;
    }
    else {
        return max;
    }
});

// console.log("using reduce", result);












// lecture 6


// solve self
// check if all numbers in our array are multiples of 10 or not.
let array = [20, 30, 30, 10];
let multiple =array.every((el)=>{
   return (el % 10) == 0;
})
console.log("multiple or not ", multiple);

// 2) create a function to find the min number in an array.
let array1 = [20, 30, 30, 10, 6];
// let min = 2000;
let minmum  = array1.reduce(( min ,el) => {
      if (el < min) {
        return el;
      } else {
        return min;
      }
});
console.log("minmun ", minmum);






// lecture 7
// Default Parameters
// giving a default value to the argumnents

function func(a, b=3 ) {
// function func(a, b ) {
    return a + b;
    // if a number add with undefine the give NaN ..not a number
};

console.log(func(2)); // 5
console.log(func()); // NaN




