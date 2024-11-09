const express = require("express");
const app = express();

let port = 3000;
//this is middlware
app.use(express.urlencoded({ extended: true }));
// this line use for post handling  lecture 2
//it write for every time to use post requist but for every requist use

// this line wirte if you send data in json foramte
app.use(express.json());

app.listen(port, () => {
    console.log(` lesting in prot ${port}`)
})

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    console.log(password);
    res.send(`standard get response Welcome ${user}`);

    // if try to send password clint give error
    // res.send(`standard get response Welcome ${password}`);
})

// app.post("/register", (req, res) => {
//     res.send("standard post response");
// })


// lecture 2 post handling 
app.post("/register", (req, res) => {
    // it show undefine b/c express not understand 
    // to convert in readable form for express 
    // console.log(req.body);
    
    
    //it possible due to this line 
    // app.use(express.urlencoded({ extended: true }));
    // now do same  work as get 
    console.log(req.body);
     let { user, password } = req.body;
     res.send(`standard get response Welcome ${user}`);
});


