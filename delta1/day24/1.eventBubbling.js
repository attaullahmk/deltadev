// Event Bubbling 

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");


div.addEventListener("click", function () {
    console.log("div was click");
})
ul.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    console.log("ul was click");
})

//this collection so use loop for one ivdivial item
for (li of li)
    
    li.addEventListener("click", function (event) {
        event.stopImmediatePropagation();
    console.log("li was click");
})

// if li click the also call parants element so this situation is called event bubbling
// so stop event bubbling use stoppropagation