// lecture 1
// templating    //other templating tools handalbar  etc but we use ejs resone is that popular and js ...google for more detail
// EJS ( Embedded JavaScript templates)
// EJS is a simple templating language that lets you generate HTML markup with plain js .

//if samelir layout use multiple time than use template as instagram page for every user same follow and message etc


// use as a blurprint : car one template is make than multiple type of car is design


// if you intialize json file in once with defult setting you can change it later on ....write the follwing command
// npm init -y

// install express and ejs
// install i ejs
// install i express







// lecture 2
// using EJS 
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("home.ejs");
});






// lecture 3
// views Directory 
const path = require("path");
app.set("views", path.join(__dirname, "/views"));




// lecture 4
//interpolation in genral english mean inserting some thing in some thing

// Interpolation, in programming, refers to the process of inserting the value of a variable or an expression into a string. This is commonly done using a specific syntax, such as ${} in template literals in JavaScript. The idea is to "interpolate" or "insert" the value directly within a string without having to concatenate different parts manually.


// Interpolation syntax

// ejs use to dynamic html page
// Interpolation refers to embedding expression into marked up text. write js logic in interlolation syntax
//  explain on home page

// just like string lettral (backtik)
// make html dynamic
// on ejs.co website  ...ejs tags further more learn
// different ejs tag for differnt logic like loop etc ..





// lecture 5
// Passing data to EJS




// lecture 6
// Instagram EJS
// create  a basic template for instagram page based on follwing route:
// /ig/:username



// lecture 7
// rolldisic
// Conditional Statements in EJS
// // adding condition inside EJS
//     <% if (diceval == 6) { %>
// <h2>Nice! roll dice again</h2>}
// <%}%>
// not give output for control flow





// lecture 8
// loop in Ejs
// <% for (let name of followers) {%>
//             <li> <%= name %></li>
//         <% } %>
    


// lecture 9
// instagram page with EJS
// const instaData = require("./data.json");


// lecture 10

  // Includes  : as a way to create subtemplate
  // <% - includs("includes/head.ejs"); %>
