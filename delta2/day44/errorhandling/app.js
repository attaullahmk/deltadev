//    cd delta2\day44\errorhandling
const express = require("express");
const app = express();
port = 3000;

const expressError = require("./ExpressError");







//lecture 1 
// pass the err and res of the code execute as normal 
// write errhandler middlware at last if call next must after the path to match it 👉 📝
app.use((err, req, res, next) => {
  console.log("-----ERROR -----");
    next(err); // if pass err in next the render the default express errhandler if not custom error handler 
    // next(); //this next search next non-errhandling middlewre 
    
});
// next middleware pass to the  next middleware
app.use((err, req, res, next) => {
  console.log("-----ERROR2 middleware -----");
    next(err); 
    
});

 
app.get("/", (req, res) => {
  res.send("this is root");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/random", (req, res) => {
  res.send("random page ")
});


 


// lecture 2 
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
   return  next(); //if not retrun than execute the rest of the code so throw error as follwing write 
  }
  throw new expressError(401, "access Denied");
  //throw err and pass to next err middleware
};

//chatgpt code to handle error if not return(next())give error(throw code execute for correct so)
// const checkToken = (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     return next(); // Proceed to the next middleware if the token is valid 
//   }
//   // Pass an error to the next middleware
//   next(new expressError(401, "Access Denied"));
// };




app.get("/api", checkToken, (req, res) => {
  res.send("date");
});


// 
app.use((err, req, res, next) => {
  console.log("-----ERROR middleware -----");
  // res.send(err);
  next(err);
});
 
 
// lecture 3 


// app.use((err, req, res, next) => {
//   let { status , message  } = err;
//   res.status(status).send(message);
// });  //invalide status code if acces page than not found for which not set status code (if error com to this middleware)

 
// to set defulte the above not work if access those for which status code not set (err route)

app.use((err, req, res, next) => {
  let { status = 500, message = "some err" } = err;
  res.status(status).send(message);
});

 





























app.use("/random", (req, res, next) => {
  console.log("i am only for random");
  next();
});



app.listen(port, () => {
    console.log(`listen in port : ${port}`);
})