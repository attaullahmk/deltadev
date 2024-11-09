// middleware
//It is an intermediary (b/w req and res)

// Request  --> Middleware --> Response

// in  Express
// middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client.


//common middleware functions:
// ->methodOverride
//-> bodyparser >nots 📝
//-> express.static
//-> express.urlencoded


// app.use(express.urlencoded({extended:true}));
//app.use(express.static(path.join(_dirname, "/public")));


// property which every middleware have
// 1 access to every req and res obj
// 2 chaining is possible (one middleware call other middleware function)
// 3 send a respone ( if multiple middleware may send response middle one middleware)
//middleware send response ( it not reach to API path )..











// lecture 2
// what do  middlewares do ?
// middleware function can perform the following tasks:
//     > execute any code(javascript).
//     > Make changes to the request and the response objects.(methedOveride)
//     > End the request-response cycle.
//     > call the next middleware function in the stack.



// Our 1st Middlewar

// app.use(middleware) // ?
// app.use middleware use for all req if not specify spcific path 


app.use(() => {
    console.log("hi, I am a middleware");
})


// using req and res object in middleware 
app.use((req, res) => {
    console.log("hi, I am middleware");
    res.send("bye");
})











// lecture 3
// type of middlewar = ?
// Using next
// the next middleware function is commonly dennoted by a variable named next.

app.use((req, res, next) => {
    console.log(`time: `, Date.now())
    next()
})


// if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.



// for middleware google express documentaion


// cooki-parser -> (explore)

// artical -> 5 express middleware libraries every developer should know


//if write code after next call the also execute but this is not a best waye to write code
// if write return next() than not execute the code after return 
//most of the programer write return next() if write the not execute 





// lecture 4
// creating Utility Middleware
// logger ( log (usefull info console print))
// date.now() use for exit time 

//logger - margan
app.use((req, res, next) => {
    req.responseTime = new Date(date.now()).toString();
    console.log(req.method, req.path, req.responseTime, req.hostname);
    next();
});

// alwaye write middlewre in top of code to execute for every route if last than not execute if match with path before middlewar




// lecture  5
// app.use // Callback
// for specific one 
app.use("/random", (req, res, next) => {
    console.log("i am only for random");
    next();
})

// middleware use if login only authonticate person
// let protect api path must be login to use api
// "api/user:id"

// create maddleware it the end of the page if page not found
app.use((req, res) => {
    // res.send("page not found");
    res.status(404).send("page not found");
})




//lecture 6
// API Token as Query String
// let's create a middle-ware for an api that checks if the access token was passed in the query string or not.

// to use api token the give to access to api( token when call api)

// /api?token =giveaccess

app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    res.send("access Denied");
})

app.get("/api", (req, res) => {
    res.send("date");
})

// also use as follwing
// waye only check if req on api route




// lecture 7
// multiple middlewares
// check token if send req to /api 
// pass middlawre as a variable 
const checkToken=  (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("access Denied");
};

app.get("/api", checkToken, (req, res) => {
  res.send("date");
});






// lecture 08


// Handling Errors
// express default error handler
// express default error handler in express documentaion ??

// we also change defalut error
// throw new Error(" ACCESS DENIED");

// if we use third party  api pakage the no gurinty  to work so use error handler

const checkTokenn = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  // the custom error 
 throw new Error(" ACCESS DENIED");
};

app.get("/api", checkTokenn, (req, res) => {
  res.send("date");
});