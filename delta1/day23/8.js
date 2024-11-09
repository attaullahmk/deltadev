//form event 
let form = document.querySelector("form");
// google form event different type explore in detail 
form.addEventListener("submit", function (event) {
    // console.log("form submitted"); //print but url wrong so not show it go to action url

    //to privent go to action url  use follwing
    event.preventDefault(); //prevent to go other page 
    console.log("submit");
    // alert("form submitted");
})