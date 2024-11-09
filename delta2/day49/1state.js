// session > clinet with sever interaction
// the role follow while send anfd recive req and res is called protocol
// lecture 1
// what is State
// state is information about req (trnsiction done or not ..)
//stateful protocol
// stateful protocol require server to save the status and session information.
// eg - ftp

//stateless protocol
// stateless protocol does not require the server to retain the server information or

// eg - http
// how make stateless protocol statefull protocol





//extra
// npm install express-session bcrypt connect-mongo
// to install multiple pakage it onces




// lecture 2

//Express Sessions
// an attempt to make our session stateful(like amozon add to card without signup to sotre card info)

// npm i express-session
// how session store info ?
// the not store in db
// what is temprary storage in sever side store info of usser as like to add to card in amozon
 




// cookies vs session ? how the store information
//session store? 

//lecture 3
//exploring session option

// express session
//using npm pakage 
app.use(
  session({
    secret: "your_secret_key", // required, used to sign the session ID cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something is stored
    cookie: { secure: true }, // adjust this depending on your setup
  })
);

//session id is same all over the browser even change tab but for diff browser treat is diff firfox chrome ...

//session store ?
// session for mongodb ?
//// what is memeory storage of javascript





//lecture 4
// Express sessions
// storing and using info
//single session store info







//lecture 5
// connect-flash (package)
// also is middleware
//the flash is a special area of the session used for storing message. Message are written to the flash and cleared after being displayed to the user.(one time)

// flash message mean pop when do some opretion..
// flash use with session not use without session

app.use(flash());
// when use pass key value pair to display 









// lecture 6
//res.local
// better way to implement flash msg 
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
})

//read doc of express res.local ..

// flash message also use for error





//lecture 7
//using sessions knowledge in project
// check th session is work or not 




// lecture 8
//using sessions
//adding cookie options 
const session = require("express-session");
// if cookies not set expire data the delete if close tabe if set cookies time the will presest untill the time for which set 

app.use(
  session({
    secret: "your_secret_key", // Required, used to sign the session ID cookie
    resave: false, // Forces session to be saved even if unmodified (default: true)
    saveUninitialized: false, // Forces uninitialized sessions to be saved to the store (default: true)
    cookie: {
      secure: true, // Ensures the browser only sends the cookie over HTTPS
      maxAge: 60000, // Set session expiration time (in milliseconds)
    },
  })
);


//must search cross-scripting attack





// lecture 9
// using flash
// flash and session must use before the route






//lecture 10
//using falsh
// create flash.ejs
// success partial
// flash create for every action as new create delete for other also implement







// lecture 11
//using falsh
// erorr partial
//implement for edite page 
//listing.js show route