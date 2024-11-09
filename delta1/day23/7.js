// let btn = document.querySelector("button");
// defualt arguemt some developer write e / evt event etc
// defualt arguement of event 

// btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("button clicked");
// })
// btn.addEventListener("dblclick", function (event) {
//     console.log(event);
//     console.log("button clicked");
// })




// keybord event have tow defualt argument code and key 

let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
    console.log(event); //explore code and key keycode
    console.log("key= ",event.key);
    console.log("code= ",event.code);
    console.log("key was pressed");
})




// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function () {
//     console.log("key was pressed");
// })



//game like
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {

//     // console.log(event.code);
//     if (event.code == "ArrowDown") {
//         console.log("move forword");
//     }
//     else if (event.code == "ArrowUp") {
//         console.log("move up");
//     }
//     else if (event.code == "ArrowLeft") {
//         console.log("move left");
//     }
//     else if (event.code == "ArrowRight") {
//         console.log("move right");
//     }



// })
//game like
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {

//     // console.log(event.code);
//     if (event.code == "KeyF") {
//         console.log("move forword");
//     }
//     else if (event.code == "KeyU") {
//         console.log("move up");
//     }
//     else if (event.code == "KeyL") {
//         console.log("move left");
//     }
//     else if (event.code == "KeyR") {
//         console.log("move right");
//     }



// })

