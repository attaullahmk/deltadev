// npm update npm@latest -g           //extra
//  see all the locally installed modules use npm ls command.

// lectur 1 
// library and framework use interchangeabily but have diff
// Library

// a library is a collection of pre-written code that can be used to perform specific tasks.
//use for small part of code to control as a user want
// eg axios

// Framework
// a framework is a set of pre-written code that provides a structure for developing software applications.
//framework use to overall structure to control of web applictation
// overall control on framework
// Eg - express


// express
// a express.js web application framwork that helps us to make web applications . It is used for server side programing.

// client(forntend) >requst  >server(backend)
// server > responce >frontend

// use of express
// 1. listen for incoming requsit
// 2 parse(Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run)
// 3 match response with roots( incoming requist path match)
// 4 response



// lecture 2
// start with express
// for installition process go to npmjs.com



// 1 create folder for project
// create json file with ....npm init
// go to npmjs website search express

// install express ... npm install express

// create index.js file in project folder
// this index.js file act is a server in project

// express code act as server




// lecture 3
// Handling request

// app.use 
// in app obj have method use.. the listen all type requset and exicute a callback
app.use((req, res) => {
    console.log("new incoming request");
});




// lecture 4
// Sending a Response
// in detail to obj
// request(req) and response(res) obj
// express documentation 
// http request is text base






// lecture 5
// Routing
// it is process of selecting a path for traffic in a network or across multiple networks.
// /search   /react ... are path
// / or home/  (same )


// in big website different routes for requste send
// as https/npmjs.com/package/filglet
// as https/npmjs.com/package/express
// as https/npmjs.com/package/react




// lecture 6
// nodemon
// to automatically restart server with code change.... the work on bash terminal run script




// lecture 7
// Path Parameters
// req.params


// lecture 8 
// query string 