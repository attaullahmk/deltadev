// lecture 1
// Get and post requests
// GET
// used to GET some response
// every browser have limited length data in url
// Data sent in query strings (limited, string data and visible in URL)
// get request data show in the link if data if large than not send in url




// POST
// used to POST somethhing (for create / write! update )
// Data sent via request body (any type of data )
// not show in url



// lecture 2
// Handling Post requests
// set up Post request route to get some response
// parse POST request data 
app.use(express.urlencoded({ extended: true }));

// this line write if you send data in json foramte
app.use(express.json());






// extended: true → Supports rich and complex data structures.
app.use(express.urlencoded({ extended: true }));
let obj = {
    "key": {
        "subkey": "value"
    }
}

// extended: false → Supports simple key-value pairs. as follwing example
app.use(express.urlencoded({ extended: false }));
let Object ={
  name: "John",
  age: "30"
}

// In summary, if your POST request contains complex, nested form data, you would want to use extended: true. If your form data is simple and flat, extended: false is sufficient. Both options work with the POST method, but they cater to different needs regarding how the data is structured.
