const express = require("express");
const app = express();
const port = 3000;


// lecture 2
//middleware  only loading not pass to next middleware b/c no pass to other
// middleware have to option 1> send responce 2> call next middlewar ... if not these both than loading
// app.use((req, res) => {
//     console.log("this is a random page");
//     // if write
//     res.send("by"); // funish the res cycle
// })




// lecture 3 

app.use((req, res, next) => {
//   console.log("this is a random page");
    next();
});




// lecture 4
app.use((req, res, next) => {
  req.responseTime = new Date(Date.now()).toString();
  console.log(req.method, req.path, req.header, req.responseTime, req.hostname);
  next();
});







// lecture  5
// app.use // Callback
// for specific one 

app.use("/random", (req, res, next) => {
    console.log("i am only for random");
    next();
})
// slash for all path
app.use("/", (req, res, next) => {
    console.log("i am only for random");
    next();
})








app.get("/", (req, res) => {
    res.send("hi root")
});




app.get("/random", (req, res) => {
    res.send("this is random page ");
});

app.use((req, res) => {
  // res.send("page not found");
  res.status(404).send("page not found");
});



app.listen(port, () => {
    console.log(`listen in port :${port}`);
    
});