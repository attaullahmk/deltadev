// array method
// indexOf: return index of something 
let primary = ["red", "yellow", "blue"];
let index = primary.indexOf("yellow");
console.log(index);
// if not exist the element than return  -1 
let inde = primary.indexOf("green");
console.log(inde);


// Include : search for a value 
primary.includes("green");
let sr =primary.includes("red");  // if exist true while false
console.log(sr);






// lecture 17
// Array Method
// concat: merge 2 arrays 
let arr2 = ["orange", "gree", "violet"];
let arr1 = ["red", "yellow", "blue"];

let arr3 = arr1.concat(arr2);
// console.log(arr3);




//reverse 
// reverse change in orignal array 
let arrReverse = arr3.reverse();
// console.log(arrReverse);


// lecture 18
// slice : copies a portion of an array 
//slice sending parametter is optional write or not ..
let color = ["orange", "gree", "violet", "red", "yellow", "blue"];

console.log(color.slice()); // all the array will print 
console.log(color.slice(2));
console.log(color.slice(2,4)); //4 are exclusive not include
console.log(color.slice(-2));
console.log(color.slice(color.length - 2)); // two are same -2 
