// cd delta2/day34.4/project   -> to start path
const express = require("express");
const app = express();
const path = require("path");
let port = 3000;



const { v4: uuidv4 } = require("uuid"); //lecture 8
const methodOverride = require("method-override");



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));






let posts = [
  {
    // id : "1a",
    id: uuidv4(),
    username: "atta",
    content: " I love codding",
  },
  {
    // id: "2b",
    id: uuidv4(),
    username: "appna colloge",
    content: " this is amizing course",
  },
  {
    // id: "3c",
    id: uuidv4(),
    username: "coder",
    content: " I code for fun!",
  },
];



app.get("/", (req, res) => {
  res.send("server woriking well! ");
});




// lecture 4
// name(noun) of resource /posts
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
  
  // res.send(posts) //yoou can send direct array 
})


// lecture 5 
app.get("/posts/new", (req, res) => {
  res.render("new.ejs"); // to get post data from user 
});

app.post("/posts", (req, res) => {
  // in post requst send information in body so print body
  // console.log(req.body);
  // res.send("post requat is working ");


  //destructure the data from obj
  let { username, content } = req.body;
  let id = uuidv4(); // lecture 8
  posts.push({ id, username, content });
  // res.send("post requat is working ");







  // lecture 6 code
  res.redirect("/posts");
  // for more detail explore express documentation
  // status code for redirect is 302 
})

// lecture 6
// Redirect
// status code in web ...302 google ?







// lecture 7
// implement : GET /post/:id
// show Route
// GET /posts/:id    to get one post (using id )
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) =>  id === p.id );
  // console.log(post);
  res.render("show.ejs", {post});
});






// lecture 8
// Create id for posts
// uuid package
// universally unique identifier
// create string type id
// npm install uuid











// lecture 9
// Implement : PATCH /posts/:id
// update Route
// Pactch  /posts/:id  to update specific post


// this only work on hoppscutch
//use put request also  
// html form send only post and get request so use lecture 10 edit.ejs .... so install pakage methodoverride to achive ..
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  // console.log(post);
  // console.log(newContent);
  // console.log(id);
  // res.send("patch requst working");
  res.redirect("/posts");
  
})



// lecture 10
// Create Form for update
// edit Route
// serve the edit form    Get   /posts/:id/edit

// best to read the documentation of any pakage before it use in project 
// npm install method-override
// npm pakage methodoverride use to override the post and get and use the put patch delete method for form
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", {post});
})






// lecture 11
// implement: /post/:id
// Destroy Route
// DELETE  /post/:id    to delete specific post

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  // let post = posts.find((p) => id === p.id);
  posts = posts.filter((p) => id !== p.id);
  // filter method use  ot all the message that id not equal to id !=p.id
  // res.send("delet is succes");
  res.redirect("/posts");
})




app.listen(port, () => {
  console.log(` lesting in prot ${port}`);
});




// create social media like platform
