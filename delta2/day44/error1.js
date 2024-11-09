// lecture 1
// type of middleware

// Middleware is a powerful concept in frameworks like Express.js, allowing developers to manage the flow of requests and responses.
// Types of middleware include application-level, router-level, built-in, third-party, error-handling, and custom middleware.



//if not set erorr handler than express  defult erorr handler triger 
// must reaD the express documentaion for error handler 
// Error Handlers (middleware)
// custom
// Error handling Middleware(4 paramerter )


app.use((err, req, res, next) => {
    console.log("-----ERROR -----");
    // next();
    // if write next() than not show erorr b/c it call next middleware non-erorr handler 
    next(err); // it pass error to next erorr handler middleware if not found error handler middleware the express defult middleware triger

    //now req on err route the show error
});

// if write noraml next() the call next middleware normle while if write next(err) the call the next one which handle the err



// stack treace ?
// 👉📝


// better waye error handler is error class 👇







// lecture 2
// Error Class
//custom
//Error inbuild class of exprees to handle error 
class expressError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

// read  mdn status code
// defualt status code send for error is 500 internal sever error..






// lecture 3
// Error class 
// custom 
app.use((err, req, res, next) => {
    let { status = 500, message = "some err" } = err;
    res.status(status).send(message);
})






// lecture 4
// Error Class
// activty
// create an admin route ans send an error with a 403 status code .

app.get("/admin", (req, res) => {
    throw new expressError(403, "access to admin is forbidden");
})



// lecture 5
// Handling Async Error(this is diff as normal so explore in detail)
// async  not call the next explicitly 
// day40 lecture code

// new - show route 
app.get("/chats/:id", async (req, res, next) => {
    let { id } = req.params;
    let chat = await chat.findById(id);
    if (!chat) {
        // alwys to pass to  next eror handler b/c async function not emplcitly so  explicitly call the next middleware 
        return next(new expressError(404, "chat not found or deleted"));
    }
    res.render("edit.ejs", { chat });
});


// if change the eg id length the give error the error whcih occur due to mongoose
// if pass the value to ejs templete the undefine(not assign proper value(invalid value to access delete or not found value) ) than the give ejs error


// prompt chatgpt > how to make middleware for async function to handle mongoose error to access id the not fuond

// alos for ejs check 




//lecture 6
// Handling async  Error
// 1. id -> doesnt exit
//  2. validtion error( sent empty message and schma constriant you define eg required  )
// for validtion(async) use try and catch
// lecture 40 chats route

try {
    // code to exectue in route
} catch (err) {
    next(err); // pass to next middle ware 
}

//cost error  in mongoose ? // id costing
// try and catch how handle of the error as above and lot of more ....



// lecutre 7
// diff waye to handle error
// 1 normal error
// 2 asynce ->(spcific) expressError
// 3 try > (all erorr)catch (bulky way )

// best  waye to write as compare to all above
// using wrapasync
// use diff waye to handle err best instance of try catch is wrapasynce
// function which retrun other function and arguement is also function




// lecture 8
// mongoose Error
// every error have name that hidden it

// middleware show the error 
app.use((err, res, res, next) => {
    console.log(err.name);
    next(err);
})

const handleValidationErr = (err) => {
    console.log("Validtion error occured");
    return err;

};

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err);
});



