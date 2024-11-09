// todo activity 
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;


    let delBtn =document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn)



    ul.appendChild(item);
    // console.log(inp.value);
    inp.value = "";  // for empty if task is add 
})



// only apply on existing elemnt

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         // console.log("element  deleted");
//         // let par = delBtn.parentElement;
//         let par = this.parentElement; // this and delBtn same thing
//         console.log(par);
//         par.remove();

//     })
// }




// lecture 3
// event Delegation
// this is due to event bubling
ul.addEventListener('click', function (event) {
    // console.log(event.target); 
    //event.target tell which element is press (targent)
    // console.dir(event.target);  // special property nodename show node name which triger the event
    // console.log("delete ");

    if (event.target.nodeName == "BUTTON") {
        // console.log("DELETE");
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    }
})





// lecture 4 
// how to play simon game 