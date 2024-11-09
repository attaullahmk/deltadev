// extracting form data 
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {

  event.preventDefault(); //prevent action on url .. to sty on page
    //   console.log("submit");
    // let inp = document.querySelector("input");
    // console.log(inp);
    // console.dir(inp);
    // console.log(inp.innerText); // this inp not work for noraml  as  other element
  // console.log(inp.value);
  

//   let user = document.querySelector("#abc");
//   let pass = document.querySelector("#xyz");
//  console.log(user.value);
  //  console.log(pass.value);
  


  // other waye to access 
  //using collection
  // console.log(form);
  // console.log(form.elements);
  // console.log(form.elements[0]);
  // console.log(this.elements[1]);
});


// this 9 and 10 explore further detail google

// lecture 10
// More event
// change event (not for small change mean key press ..)
//the change event occurs when the value of an element has been changed(only works on <input>, <textarea> and <select> element).

// if key press no change if click out of input area than change occure print in console
let user = document.querySelector("#abc");
user.addEventListener("change", function () {
  console.log("input change ");
  console.log("final value = ",user.value);
})



// input event
// the input event fires when the value fo an , <input> , <select>, or <textarea> element has been changed.
user.addEventListener("input", function () {
  console.log("input event ");
  console.log("final value = ", user.value);
});

// input  event not trigre non charctor key as shift arow ...


// make  text editor
let p = document.querySelector("p");
let enter = document.querySelector("#txt");

enter.addEventListener("input", function () {
  p.innerText = enter.value;
})