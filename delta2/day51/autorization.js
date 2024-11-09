// connecting login route

const { register } = require("module");
const passport = require("passport");

// how to check if User is logged in?
req.isAuthenticated(); // passport method use to insusser that the user is stor in session 
// implement in middleware 







// lecture 2
// logout user
// get /logout
//passport req.logout method 
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "logged you out");
        res.redirect("/listings")
    });
});


//lecture 3
//adding styling
// req.user  // passport property if login show user info while not the show undifine






//lecuture 4
//login after signup
// passport login method automatically establishes a login session.
//we can invoke login to atutomactically login a user.

// passport login method use to automacticaly login after registeration
// use it in login route
req.login(registereUser, (err) => {
    if (err) {
        next(err);
    }
    req.flash("success", "welcome to wanderlust");
    req.redirect("/listings");
});



//lecutre 5
//post-login page
// req property req.path req.originalUrl







//lecture 6
// listing owner



//lecture 7
//starting with authorization
// req.user._id show the id of the current user (owner )
//impelment to hide the edite option form other user the not owner of the listing or reviws





//lecture 8
//setting authorization
//for listings



//lecture 09
//stting authorization
//for reviews



//lecture 09
//stting authorization
//for reviews part 2
// nesting populate ?