// leacture 10
// data structure is the way of store data in computer memroy
// their are many way one of them is array which store data in linear form 
// Array (data structure )
// linear collection of thing 
let student1 = "imran";
let student2 = "iqbal";
let student3 = "kamran";
let student4 = "ishaq";

// stor same thing in differnt variable
// so best way to store in one varible(array)
let student = ["imran", "iqbal", "kamran", "ishaq"];
// console.log(student);
// console.log(student.length);







// leacture 11
// Visualizing Array 
let num = [2, 4, 6, 8];
console.log(num[2]);
// acces the index of array using squre brack
// if element not stor in index(you want to access) the will print undefined

console.log(typeof num); //object






// leacture 12 

// Creating arrays 
let mraks = [23, 54, 6, 4];
let names = ["imran", "wajid", "khan"];
// some language as c++ array contain same data type element but js store different data type also
let info = ["amin", 23, 54,]; //mixed array

// empty array 
let newArr = [];

// length of array 
console.log(info.length);

// amizing point 
console.log(info[0]); // print first elemnt of array
// index chaining 
console.log(info[0][0]); // first element first character 
console.log(info[0].length); //length of fisrt element 




// lecture 13
// Arrays are Mutable 
let fruits = ["mango", "apple", "litchi"];
console.log(fruits);
fruits[0] = "banana";
console.log(fruits); // replace the mango with banana in orignal array so array are mutable

// very very imporntant 
console.log(fruits.length);
fruits[10] = "pineapple";
// length from 3 t0 11 is empty 
console.log(fruits.length); //11 b/c we store pineapple in 11 index



// lecture 14
// Array Methods
// push : add to end
car = ["soxiky", "ghwagy"];
car.push("dyna");
console.log(car);
// unshift: add to start
car.unshift("mehran");
console.log(car);
// Pop: delete from end and retruns it
let last =car.pop();
console.log(last);
console.log(car);
// shift: delete from start and returns it
let start = car.shift();
console.log(start);
console.log(car);



// lecture 15
// practice Qs
// for the given start state of an array, change it to final from using methods.

let st1 = ['junuary', 'july', 'march', 'august'];
let st2 = ['july', 'june', 'march', 'august'];
let de =st1.shift();
let de2 = st1.shift();
st1.unshift('june');
st1.unshift(de);
console.log(st1); //'july', 'june', 'march', 'august'



