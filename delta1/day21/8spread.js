// spread (mean pelana )
// expands an iterable into multiple values
// function func(arrguments ) {
//     //do something
// }

// math is window obj method defult browser
// console.log(Math.min(2, 3, 5, 10, 3,));

let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);
Math.min(arr[0], arr[1], arr[2]); // ans so on 
// min function in math only take number if pass array element one by one as above very deficult so use spread method(...first array)
console.log(...arr);// this value individully pass to function
console.log(min);
// console.log(..."attaullah"); //add space in charactor


function not(...t) {
  // just for understanding
    let a = t.length;
    console.log(t); 
    console.log("length", a);
    // let a = 1;
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "t") {
        console.log("fine t in text ");
        a = 0;
        break;
    }
    }
    if (a) {
        console.log("not found t in text ");
  }
  // return 0;
}

not(..."atta");
console.log("break");
console.log(not(..."atta")); //
console.log("break");

not("atta"); // only text than take one is value in array

// if call function that define with same name the last one will be consider even call the function before the second one function

// modify form of above function
// function not(...t) {
//      for (let i = 0; i < t.length; i++) {
//     if (t[i] == "t") {
//         return "fine t in text "
//     }
//     }
//      return "not found t in text ";

// }
// console.log(not(..."atta"));
// console.log(not("atta"));












// lecture 9
// // Array literals
// let array = [1, 2, 3, 4, 5];
// let newarr = [...array]; //store values in other array
// newarr.push(3,40);
// console.log(newarr);

let chars = [..."hellow"];
// console.log(chars); //spread word into chractor 

// let even = [2, 4, 6, 8];
// let odd = [1, 3, 5, 7];
// let newnu = [...odd, ...even,...array]; // oder matter in spread first write first print
// console.log("cancatinate " , newnu); // add two array in one












// lecture 10
console.log("lecture 10");
// with Object literals 

let data = {
    email: "atta@gmail.com",
    password: "abcd"
};
//it spread the data obj value into datacopy and add some other property
let datacopy = { ...data, id: 123 }; //add with data object 

console.log(datacopy);


let arry = [1, 3, 4, 6]; //array-index -> values
let obj = { id: 23, username: "khan" }; // obj -> key values pair
console.log( " as normal access obj value using key ", obj.id);

//convert array into obj 
let obj1 = { ...arry }; // index of array convert into obj key and element into values
console.log(obj1);
// console.log(obj1.1);  // not access using index as normal acces obj value using key 
console.log(obj1[2]);  //access obj value
console.log({..."this is fun"});