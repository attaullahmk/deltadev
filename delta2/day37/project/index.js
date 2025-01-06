// cd  delta2/day37/project  -> to start path
// prerequist
const express = require("express");
const app = express();
let port = 3000;
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));






// lecture 1
//read the doucumentaion of every package
const { faker } = require("@faker-js/faker");
// let getRandomUser= ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password()
//   };
// }
// console.log(getRandomUser());






// lecture 2
// with mysql face some authontication problem so use mysql2
// const { Console } = require("console");

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "iuser",
  // password: "1234",
});



// only for check the connection with database
connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});



// query  aslo write in variable
// let q = "SHOW TABLES"; // best practice to write in variable 

// to prevent server from crush to use try and catch 

// try {
// connection.query("SHOW TABLES", (err, result) => {
//   if (err) throw err;
//   console.log(result); // result actual an array.. mean table show in array in db
//   // console.log(result.length); // show the lenght of array
// });
// } catch (err) {
//   console.log(err);
// }



// if one connection is establish the start so to stop connection write follwing commnand to stop database changing
// connection.end();  //if connection is end than not work below query









// lecture 3
// schema.sql file





// lecture 4
// create table user in iuser database using workbench but try from sql file to create other file if sql install in system







// lecture  5
// this use to change in database form server (app)
// query also stor in variable
// let q = "INSERT INTO user(id, username, email, password) values(?,?,?,?)";
// ? mark mean that if value not pass with excution time than it also with qury to replace value of ? 
// //replace the placeholder(?) with array values
// let user2 = ["18423", "mkfs", "attaullah131402502@gmail.com", "pakistan$025"];



// // now no need for 4 ?mark if insert array of array mean multiple value at once 
// let q1 = "INSERT INTO user(id, username, email, password) values ?";
// // enter multiple user (array of array form)
// let user1 = [["2393", "imrand1", "1abdc@gamil.com", "a1bdc123"],
//             ["2413", "imradnkhan1", "a1bcdd12@gamil.com", "abcd1d123"]
// ];


// try{
//   connection.query(q,user2, (err, result) => { // one entery
//   // multiple entry (array ) close in [ ] brackat
//     connection.query(q1,[user1], (err, result) => {

//       if (err) throw err;
//       console.log(result);
//     });

// } catch (err) {
//     console.log(err);
// };
// connection.end();

















// lecture 6
//enter multiple data it a time
//    let getRandomUser = () => {
//      return [
//       faker.string.uuid(),
//        faker.internet.userName(),
//        faker.internet.email(),
//        faker.internet.password(),
//      ];
// };

// let q = "INSERT INTO user(id, username, email, password) values ?";
// let data = [];
// for (let i = 0; i <= 100; i++) {
//   // console.log(getRandomUser()); //checking 100 fake users
//   data.push(getRandomUser());
// }

// try{
//     connection.query(q,[data], (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     });
  

//   } catch (err) {
//     console.log(err);
//   }


// connection.end();



// lecture 7
// Routing


// GET  / -> show no of user in DB
// GET /user -> show users(email, id, username) ejs
// PATCH /user/:id  -> username edit

// home work
// Post  / user -> new user
// delete  /user/:id  -> user delete









// lecture 8

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      // result[0] = give obj {"count(*)" : 1115} so use the key count(*)
      let count = result[0]["count(*)"];

      // lecture 9 home page to show result in home.ejs 
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some err in database");
  }
  
  // res.send('working');
});
 



// leture 9
// home page
// in above api


// leture 10
// Creating our Routes
// Get   /user   Fetach and show (userid , username , email, ) of all users


app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let data = result;
      // res.send(data);
      
      // console.log(data);
      res.render("user.ejs", { data });
    });
  } catch (err) {
    res.send("some error occurred");
  }
  // no need to write connection.end b/c if function end or response send automatically stop
});












// lecture 11
// edit rout
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  // add in backtik to send as a string not id 
  // console.log(id);

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result); //for checking
      // result data come in array form use 0 index to extract obj from array as user have now obj 
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some err in database");
  }
  // res.render("edit.ejs");
});




// lecture 12
// UPDAT(DB) ROUT
app.patch("/user/:id", (req, res) => {
  // res.send("updated");

  let { id } = req.params;
  // console.log(id);
  let { password: frompass, username: newusername } = req.body;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result); //for checking
      let user = result[0];

      if (frompass != user.password) {
        res.send("wrong password");
      } else {
        let q2 = `UPDATE user SET username = '${newusername}' WHERE id ='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          // res.send(result);
          res.redirect("/user");
        });
      }
      // res.send(user);

      // if user double responce the give error
    });
  } catch (err) {
    console.log(err);
    res.send("some err in database");
  }
});


//no need connection.end() b/c if responce send automatically end connection 


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});




// must create
//Homework Tasks

// creat form to add a new user to the database
// Create Form to Delete a user from DataBase if they enter correct email id and password.
// Homework Tasks

// Create form to add a new user to the database
app.get("/user/new", (req, res) => {
  res.render("new.ejs");

});

app.post("/user", (req, res) => {
  let { id, username, email, password } = req.body;
  let q = "INSERT INTO user(id, username, email, password) VALUES (?, ?, ?, ?)";
  let user = [id, username, email, password];

  try {
    connection.query(q, user, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("some error occurred");
  }
});

// Create form to delete a user from the database if they enter correct email id and password
app.get("/user/delete", (req, res) => {
  res.render("delete.ejs");
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { email, password } = req.body;
  let q = `SELECT * FROM user WHERE id ='${id}' AND email ='${email}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (!user || user.password !== password) {
        res.send("wrong email or password");
      } else {
        let q2 = `DELETE FROM user WHERE id ='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error occurred");
  }
});

