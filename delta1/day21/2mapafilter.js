// Map
// do some opretion (double value in this) with element and retrun after modification each element in a new array with modification

// let newArr = arr.map(some function definationn or name )

let num = [1, 2, 3, 4, 5];
let double = num.map(function (el) {
    // console.log(el * 2); // if not return than print undfine value
    return el * 2;
    // return el;

    // if this function is empty than it return undefined
    
});

console.log(num); //no change in orignal array 
console.log("double",double);








// Filter function
// create new a arrar if callback give true than it add an new array while false not add in new array (even)
// let newarr = arr.filter(some function defination or name )
// if take value on some condition than use filter method

let nums = [2, 4, 4, 6, 5, 3, 7, 5, 4];
let even = nums.filter((num) => (num % 2 == 0));

// let even = nums.filter((num) => (num * 2));   //it not do other opretaion it return as the array
console.log(even);



