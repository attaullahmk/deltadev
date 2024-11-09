// h1 = document.querySelector("h1");
// h1.style.color = "red";


// setTimeout(() => {
    
//     h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
    
//     h1.style.color = "green";
// }, 2000);
// setTimeout(() => {
    
//     h1.style.color = "blue";
// }, 3000);




// other best way to do this thing

// function changeColor(color, deley) {
//     setTimeout(() => {
//       h1.style.color = color;
//     }, deley);
// };

// this is not a good way b/c if one work in not complete other will start
// if one depend on other the not wait other create error
// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("blue", 3000);



// other way to do with nesting callabck


// h1 = document.querySelector("h1");
// function changeColor(color, deley, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//         console.log(nextColorChange); //for understindig
//     }, deley);
// };


// // //callback nesting -> called callback hell 
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         console.log("hi next");
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000);
//             console.log("helo word");
//         });
//     })
// });








// lecuture 11
// Promise
// lets apply promises to our callback hell
// apply in leture 5 
h1 = document.querySelector("h1");

function changeColor(color, deley) {
    // reject chance is 0 persent so reject ignore no mater 
   return new Promise((resolve , reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, deley);
    });
}

// for understanding 
let requestPromises = changeColor("white", 1000);
console.log(requestPromises); // it mean the print befor complete so show pandding 
// pending untill when time is not complete 

changeColor("red", 1000)
    .then(() => {
        console.log("red color was completerd");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("orange color was completerd");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green color was completerd");
        return changeColor("blue", 1000);
    
    })
 


