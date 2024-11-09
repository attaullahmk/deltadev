// lecture 9
// favorite Movie
// let favorite = "avator";
// let gusese = prompt(" guesse my favorite movies")
// while ((gusese != favorite) && (gusese !="quit")) {
// // while (gusese != favorite) {
// //     if (gusese == "quit") {
// //         console.log("quit");
// //         break;
// //     };
//     console.log("try agin");
//     gusese = prompt("enter guses");
// }

// console.log(favorite);



// // for understanding
// let z = 3;
// let y = 5;
// let x = ((z != 2) && (y != 1));
// console.log(x);





// lecture 10
// break keyword
// loop execution stop
// break genral use with while loop

// let i = 0;
// while (i < 5) {
//     if (i == 3) {
//         // break;
//     }
//     console.log(i);
//     i++;
// }






// lecture 11
// loop with arrays

// let fruites = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 0; i < fruites.length; i++){
//     console.log(i, fruites[i]);
// }








// lecture 12
// Loops with Arrays
// nested loops with nested arrays

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder women", "flach"]];

// for (let i = 0; i < heroes.length; i++){
//     console.log(`list # ${i}`);
//     for (let j = 0; j < heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }



// lecture 13
// for of loop not use on obj directly 
// for of loop use for collection like array string etc
// this loop not working in internet explolar
// for (element of collection) {
//     //do something
// }

// let fruite = ["mango", "apple", "banana", "litchi", "orange"];

// for (fruit of fruite) {
//     console.log(fruit);
// }

// for (char of "deltacourse") {
//     console.log(char);
// }




// lecture 14
// nested for of loop
// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder-women", "flach"],
// ];

// for (list of heroes) {
//     for (hero of list) {
//         // console.log(hero);
//         // for (char of hero) {
//         //     console.log(char);
//         // }
//     }
// }





// extra thing
// let fruite = ["mango", "apple", "banana", "litchi", "orange"];
// for in loop use for index it start from 0 for array while in obj it point to the key of obj 
// for (i in fruite) {
//   console.log(i);
//   console.log(fruite[i]);
// }

let obj = { 
  k1: "23",
  k2: 34,
  k3: "we"
}


for (i in obj) {
  // console.log(i);
  console.log("key of obj ", i , "value of obj ", obj[i]);
}

// that give erorr b/c  obj not itrate using index mean number in for of loop i mean number which start form zero 
for (i of obj) {
  console.log(i);
}