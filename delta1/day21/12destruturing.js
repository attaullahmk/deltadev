// Destructuring
// storing values of array into muliple variables
//not change the orignal array 
let names = ["tony", "star", "khan", "jan", "ram"];
// let winner = names[0];
// let runnerup = names[1];
// to reduce this way into small.. use follwing way


// this value assign on the base of index number from start to ... 
// let [winner, runnerup] = names;
let [winner, runnerup, ...other] = names;
 // destructure(...) use other values of array if (...) not use than khan store  in other (use rest concept)
console.log(winner, runnerup); // tony star
console.log(other); //print khan jan ram 
console.log(typeof winner); //string
console.log(typeof other); // object 

