// what is express router



// lecutre 1
//Express Router
// Resturctutrig Listings
// create routes folder file listing.js
// create router obj


//app.use("/listings", listings);










//leacutre 2
// Resturctutrig review.js

// Express Router
// restructuring Reviews

// app.use("/listings/:id/reviews", review);

// router = express.router(({mergeParams : true}))







//lecture 3 and 4
// actull this is 1 lecture
// miscellaneouse topic
// express Router
// cookis

//express router
// express router are a waye to organize your express application such that our primary app.js file does not become bloated


// const rounter  = express.Router() // create new router object
//read express doc router =?
//easy so not need to write

// create classroom folder

// why code make modular







// lecture 5
// cookies (google wakipidia )
//web cookies
//HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.

/// if you go in page to remember thing use cooke as if you purchase in amozon some thing bueaty thing than go other page electric thing so remember wich thing add to card so use cookies so on

// why use cookies and how to implement cookie in express sever
// how implement cookies as like ecept or reject cookies


//cookies also use to tarack search browser thing the show as related adds ..
// implement dark mode using cookies
// cookies use to authonticate


// cookies store in key value pair








//lecture 6
//cookies no thing it is peice of info 
// how to send cookies ?
//in Express
//if send req on this path so save cookies in borwser than change other page in website cookes store 
//also read express doc cookies 
app.get("/setcookies", (req, res) => {
    res.cookie("greet", "namaste");
    res.cookie("origin", "india");
    res.send("we sent you a cookes!");
});







// lecture 7
// cookie parser
//cookies-parser package
// cookies use autontication and authorization related thing 

const cookieParser = require("cookie-parser");
const { sign } = require("crypto");
app.use(cookieParser);

app.get("/getcookies", (req, res) => {
    console.dir(req.cookies); // not use dircect other route or page in same website if send in one path and accees on other route  this  whyy use  the cookieparser(npm) pakage to access other page 
    res.send("got the cookies");
});

app.get("/getcookies", (req, res) => {
    let { name = "anonymous" } = req.cookies;
    res.send(`hi , ${name}`);
})










// lecture 8
//signed cookies
// use to cheek not change the origanl cookies which send by sever 
app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req, res) => {
    res.cookie("color", "red", { signed: true });
    res.send("done!");
});

//verify signed cookie
//tow type of cookeis to verify it
// sign and unsign cookies 

app.get("/verify", (req, res) => {
    // to vrifyy 
    console.log(req.cookie); // unsinged
    res.send(req.signedCookies); // singed cookies to access
    // if any change with signed cookies than show false or empty 


});

