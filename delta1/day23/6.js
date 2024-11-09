// this in Event listeners
// When 'this' is used in a callback of event handler of something , it refers to that something.

let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    // console.log(this); // it print button markup it mean this refers btn obj(this is btn obj actual)
    // console.dir(this);
    this.style.backgroundColor = "red";
})



// p.addEventListener("click", function () {
//     this.style.backgroundColor = "green";
// })

// h1.addEventListener("click", function () {
//     // console.dir(this);
//     this.style.backgroundColor = "green";
// })

// h3.addEventListener("click", function () {
//     // console.dir(this);
//     this.style.backgroundColor = "green";
// })


// if do same work again and again(as above) for same thing so best waye to  apply using one function

function changeColor() {
    this.style.backgroundColor = "green";
}
h3.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
