// cd delta2\day32\ejs
const express = require("express");
const app = express();
const path = require("path");
let port = 3000;

// ejs is a package
// no need to require ejs b/c express automatically require bydefult internally.....

// bydefault express search viwes folder 
//view mean template
app.set("view engine", "ejs");
// app.set function set differnt thing but one is to set view(template) engine

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


app.get("/", (req, res) => {
  // normal response
  // res.send("this is root");

  // ejs not send... render responce
  res.render("home.ejs");
  // no need to mention name of directory express self search in veiwss folder .. file write home or home.ejs both are work

  // express search views folder in project bydefult so create views folder(can create other name but general use viws folder)
  
// ejs file is mixture of html and js code to create template
    
  // install ejs extension(EJS language support) (to highlight some syntax)
});





// lecture 3

// if you run from outer than ues path package (require to use)
// alwys use this(path.join function) if sever start from outer than not give error 
app.set("views", path.join(__dirname, "/views"))
 //__dirname is the index.js current directory(form which it call (if call from ..delta2 __dirname is ...delta2))  join the views folder


// also sever start from outer
    // nodemon delta2/day32/ejs/index.js
// but if you render veiws folder than not render ejs file it search form which place code is run ..

    // but normal response is send
    app.get("/hello", (req, res) => {
      res.send("hi to every one");
    });

    // if you from outer than use path package (require to use)
    
    
    


// lecuter 4 
// explain in home file



 // lecture 5  and 7
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  //also use same value if key and value some genrall use as this one value
  // this one value also work 
  res.render("rolldice.ejs", {diceVal});
  // res.render("rolldice.ejs", {diceVal : diceVal});
  // res.render("rolldice.ejs", {num : diceVal});
  //num is pass and use if num use in page is num
        
    })
    

//  lecture 6 and 8
app.get("/ig/:username", (req, res) => {
    const followers = ["kahn", "jan", "ram", "kam"];

    let { username } = req.params;
res.render("instagram.ejs", {username , followers} )        
})
    


 // lecture 9
app.get("/insta/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  // console.log(instaData);
  const data = instaData[username];
  // console.log(data);
  // res.render("insta.ejs", {data});

  // if not exist account you search
  if (data) {
      res.render("insta.ejs", { data });
  }
  else {
    res.render("error.ejs");
  }

})


    

  
// lecture 10
// includes aslo called partial
  //for detail ejs.co --> include


