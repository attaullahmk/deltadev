// Array Methods
// forEach vs for of loop = ?
// forEach  map  filter  some  every reduce => this function use callback is argument


// forEach
// forEeach  use to some opretion with each value of array
// arr.forEach(some function defination or name);
// foreach not use now .. for of loop use now
// the not return value



let arr = [1, 2, 3, 4, 5];
function print(el) {
    console.log(el * 2);
    // return el;

}
// use name function 

let ret = arr.forEach(print);
// console.log(ret); //print undifine mean that not retrun any value
console.log("original",arr);



// or

// diracte definetion of function
// arr.forEach(function (el) {
//     console.log(el);
// });
// arrow function
// arr.forEach((el) =>{
//     console.log(el);
// });



// it also use for obj in array 
let obj = [{
    name: "me",
    age: 23
}, {
    name: "karman",
    age: 40
}, {
    name: "waqas",
    age: 30
    }];


obj.forEach((student) => {
    //student denote element of array
    console.log(student.name, student.age);
    
})

