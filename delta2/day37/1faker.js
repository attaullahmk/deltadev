// lecture 1
// Faker
// to generate fake data
// read the faker documentation 





// userid  username  email password 
let getUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),

    ];
}





// lecture 2
//we  can not direct interact with database so we requist t0 server and server interact with db
// sqlDB(myscql)  server(node)

// mysql2 is package to link server with mysql dbs

// mysql package but face some problem Authenticatation
// MySql2 package
// to connect node with mysql
// npm i MySql2

// if one connection is establish than close use follwing command
// connection.end(); to close connection





// lecture 3
//this use for abslute path 
// THIS  FOR COMMAND LINE
// C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p
// the above command run than enter password than access to db
// if set if create path in enviroment variable as above the simple write mysql -u root -p form cmd ... 

// create shema.sql (sql file)
// open sql CLI // write follwing command
// USE TABLE-NAME    (select  table )
// source schema.sql //write sql commnad RUN THE COMMAND WHICH WRITE IN SOURCE SCHEMA.SQL





// 4 way to access database
// 1) workbench
// 2) mysql package -> NodeJS
// 3) CLI   -> to out from CLI  write quit/cntrl + D
// 4) USING sql files (schema.sql)  -> use for large query if not have workbench


//-- you can run from sql terminal this file using following command
//--  source E:\jcode\delta2\day37\project\schema.sql






// lecture 4
// create table user

// CREATE TABLE iuser(
//     id varchar(50) primary key,
//     username varchar(30) unique,
//     email varchar(50) unique not null,
//     password varchar(40) not null
// );


// note :- try using sql file






// lecture 5
// insert user
// using placehoders 
//google palceholders in sql ?
let user = ["123@ach", "randla", "rands;lf@gmail.com", "passd@123"]

connection.query(`insert into user (useid , uesername, email, passward) values(?,?,?,?)`,
    user,
    function (err, result) {
        if (err) throw err;
        console.log(result);
    })







// letture 6
// insert in Bulk
// using faker

let data = [];
for (let i = 1; i <= 100; i++){
    data.push(getUser());
}
console.log(data);
let q = `INSERT INTO user (userId , username, email, password)VALUES ?`;

connection.query(q, [data], function (err, result) {
    if (err) throw err;
    console.log(result);
})






// lecture 7
// Routing


// GET  / -> show no of user in DB
// GET /user -> show users(email, id, username) ejs
// PATCH /user/:id  -> username edit

// home work
// Post  / user -> new user
// delete  /user/:id  -> user delete




// lecture 8
// setting up express app
// GET  / fetch and show total number of users on our app 
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // to extract number from obj array than obj 
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    }
    catch (err) {
        res.send("some error occurred");
    }
});


// leture 9
// home page




// leture 10
// Creating our Routes
// Get   /user   Fetach and show (userid , username , email, ) of all users

app.get("/user", (req, res) => {
  let q = `SELECT * FROM iuser`;
  try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        let data = result;
        console.log(data);
        res.render("user.ejs", {data})
 
    });
  } catch (err) {
    res.send("some error occurred");
  }
});






// lecture 11
// creating our routes
// get/user/:id/edit   to get from to edit the username , based on id this form will require a password


// Patch  /user/:id   to edit username, if correct password was enterd in form




// homework tasks
// create form to add a new user to the databss
// 2 create form to delete a user form database if they enter correct email id and password.

