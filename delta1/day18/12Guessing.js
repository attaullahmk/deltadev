// Guessing Game
// user enters a max  number and than tries to guess a random generated number between 1 and to max.

// let user = prompt("enter a number 1 to 10");

// let randnum = Math.floor(Math.random() * 10) + 1;
// console.log(randnum);
// let count = 0;

// this aproch me
// while (user != randnum && count<3 ) {
//     user = prompt("enter again");
//     count++;
//     if (count == 3) {
//         console.log("game is over");
//     }

// }
// if (user == randnum) {
//     console.log(`you win in ${count} guess`)
// }



// best code

let max = prompt("enter a number a max ");

let randnum = Math.floor(Math.random() * max) + 1;
console.log(randnum);
let scor;
let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if (guess == randnum) {
        console.log("you are right! congrats" , `you random number is ${randnum}`);
        break;
    }
    else if (guess < randnum) {
      guess =  prompt("your guess was too small");
    }
    else {
        guess = prompt("your guess was to lagee. please try again");
    }
    scor = max - 1;
}

console.log("you score" , scor);


