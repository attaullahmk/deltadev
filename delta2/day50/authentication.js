//  lecture 1
// let's understand
// authentication
// authentication is the process of verifying who someone is
// mean verifying owner who is
// sign up / login comes under authentication

const passport = require("passport");

// authorization
// authorization is the process of verifying what specific applications, files, and data a user has access to




// lecture 2
// storing passwords
// we nvere store the password as it is . we store their hashed form.

// password "helloworl" >>hashing function >>how it is stored "2343hlkakdfj4ds8q38iglaksdhj"

// hashing function are those function which take input string and that convert into unrecognize form which not understand other
// for hashing function input same output will be same






// lecture 3
// what is hashing function ?
// Hashing
// what we need to know?

// for every input, there is a fixed output
// they are one-way functions, we can't get input from output
// for a different input, there is a different output but of same length
// small changes in input should bring large changes in output


// type of hashing function > SHA256 , MD5 , CRC , bcrypt

// brotforce attack =?
//google commanly use password

//explore abslute/modules function one way function

// why use slow hashing function instead of fast ...





// lecture 4
// Salting
//password salting is a techniqu to protect passwrods stored in database by adding a string of 32 or more characters and then hashing them ..

// let salt = "#$%^" // make every company self
// that add every string as passwrod abc so == abc#$%^

//reverse lookup table =?



// we not make form scratch authontication and authorization algorithm .. we use build-in pakage to easy our work




// lecture 5
//passport (read passprot.org offical web )
//passport is express-compitable authentication middleware for node.js
// passport use authontication not create form scratch
// npm i passport
// npm i passport-local (for local stratigy (you can also sign with google tweiter ...))
// npm i passprot-local-mongoose (the help with mongoos library( is a plugin that simplifies building username and passwrod login with passport) )
// how to implememt login with multiple way mean with google facebook and local




//lecture 6
// to implement local staratigy create user model
// user model
// user: username , password , email

// you're free to define your User how you like, passport-local mongoose will add a username, hash and salt field to store the usrnaem, the hashed password and the salt vlue.

//additionally, passport-local mongoose adds some methods to your schema. see the API

// must read the documentation of passport-mongoose-local
// user name automitically create it






// lecuture 7
// configuring strategy
// passprot.initialize()
//A middleware that initailizes passport.

// passport.session();
// a web application needs the ablility to identify users as they browse from page to page. This series of requests and responses, each associated with the same user, is known as a session.

// passport.use(new localStorage(User.authenticate()));







//lecture 8
//Demo User
app.get("/regUser", async (req, res) => {
    let fakeUser = new User({
        email: "student@gmial.com",
        username: "khan-student",
    });
    let newUser = await User.register(fakeUser, "helloworld");
    res.send(newUser)
})






//lecture 9
//signup User
//GET / signup
//POST /signup




//lecture 10


//GET / signup
//POST /signup


//lecture 11

//GET / login
//POST /login


//must read doc fo passport 