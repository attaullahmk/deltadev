const express = require("express");
//express()  is funtion that we exicute give value and the store .
const app = express();
// by conventional express return store in app vriable(obj) ( this will help to create sever side app)

// console.dir(app); // to see method and property of app object 

let port = 3000;  //8080 this port use for custom server
// some port alloted for some specific task 


// Ports : port are the logical endpoits of a network connection that is used to exchange information between a web server and a web client.
// ( like physical port use in leptop to connect charger usb etc as like logical port use to connect with net)


// listen function use for incoming requist
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})


// now in browser write : localhost:3000
// connot Get /  -> it mean that sever listening but not responce ( not avilable sutiable responce)
// to stop the server .. ctrl + c







// lecture 3

// req and res these 2 parameter bydefult with use(function) function
// it execuit if any type requist come

// app.use((req, res) => {
//     console.log("requst received ")
// })

//if search on localhost ////locahost:3000/home or help .. than also requist recived

// now if you start app and write (localhost:3000 ) terminal print requst received

// not access localhost API on hoppscutch
// hoppscutch not work for localhost so extention download from github
//link -> github.come/hoppscotch/hoppscotch/discussions/2051





// lecture 4
// read the express documentation
// https->text-based requist express convert this text-base requist into js obj ( this is called parsing)
// server write in diff language text convert into js obj ..

  // app.use((req, res) => {
  // req obj
  // requst obj have lot of property and method
  // console.log(req);
  // console.log("requst received ");

  // res obj
  // responace obj have lot of property and method
  // console.log(res);
  
  // text response that will print in browser
  // res.send("this is a basic responce");
  
  // in json formate 
    // res.send({
    //     name : "apple",
    //     color: "red",
    //     // this is show in json formate
      // });
    
// html response 
//   res.send("<b> hi every one </b> <p> this just like a wow</P>")
  
// });





// // lecture 5
// use method use for all response any requst recive
// app.use((req, res) => {
//   console.log("requst recvied");
//   let code = "<h1> fruits</h1> <ul> <li>apple</li> <li>oringe</li> </ul>"
//   res.send(code);
//   // the send in all path 
// })



// other method for specific response
app.get("/", (req, res) => {
    res.send("you contacted root path");
  // slash is defualt path (home page )
})
// // google documentation
// // one requist send one responce in one path


// /*
app.get("/apple", (req, res) => {
  res.send("you contacted apple path");
})
// app.get("/contect", (req, res) => {
//   res.send("you contacted contect path");
// })

// // if requst no match with existing path
// //standard or custom responce
app.get("*", (req, res) => {
  res.send("this path does not exist");
})


// // this work on hoppscoutch
// browser by defult get resquist send 
// app.post("/", (req, res) => {
//   res.send("you are in post path");
// })

// */





// // lecture 6
// // nodemon
// // to automatically restart server with code change the work... on bash terminal run script than automatically restart
// // nmp install -g nodemon // best practice to install globally









// // lecture 7

// // path Parameters 
// //we send with path some variable value as facebook instagram eg in vedio

// app.listen(port, () => {
//   console.log(`app is listening on port ${port}`);
// });

// app.get("/", (req, res) => {
//   res.send("you contacted root path");
// });

// // if you send path farameter write colon(:) before
// app.get("/:username/:id", (req, res) => {
//   // console.log(req.params);
//   // res.send("you contacted root path");

//   let { username, id } = req.params;
//   // res.send(`welcome to the page of @${username}`)

//   // it send in html file 
//   let htmlstr = `<h1> welcome to the page of @${username} </h1>`
//   res.send(htmlstr);
// });




// // lecture 8
// // Query strings 

// app.listen(port, () => {
//   console.log(`app is listening on port ${port}`);
// });
// // if try in search as express react search in npmjs.com website
// app.get("/search", (req, res) => {
//   // console.log(req.query);
//   // res.send("no results ");
//   let { q } = req.query;
//   // if query not exist 
//   if (!q) {
//     res.send("no thing is found this also write in html tag")
//   }
//   res.send(`search results ${q}`);
// });


// in browser search (localhost:3000/search?q=apple) or below url
// http://localhost:3000/search?q=mago



