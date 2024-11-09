// cd delta2/day40/project
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path =require("path")
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));
const Chat = require("./models/chat.js");
const { send } = require("process");
app.use(express.urlencoded({ extended: true }))
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.json());
const expressError = require("./ExpressError");



main().then(() => {
    console.log("connection succuss");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

// lecture 2 create modle and stor the following data
// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     message: "send me you exam cheets",
//     created_at: new Date(),
// })

// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })





// lecutre 3
// initalize database with random data





//lecture 4
// Index Rout 
app.get("/chats",async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("working")

    res.render("index.ejs", { chats });
})

//lecture 5
// new route 
app.get("/chats/new", (req, res) => {
  res.render("new.ejs")
  // this same thing not work for asynic func (explain in )
  // throw new expressError(404, "page not found");
})


//lecture 6
app.post("/chats", (req, res, next) => {
  try {
    let { from, to, message } = req.body;
    let newchat = new Chat({
      from: from,
      to: to,
      message: message,
      created_at: new Date(),
    });

    newchat
      .save()
      .then(() => res.redirect("/chats"))
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }

});





//edit rout
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);

    res.render("edit.ejs", {chat});

    

});


//udpdate
// app.put("/chats/:id", async (req, res) => {
//     let { id } = req.params;
//     let { msg } = req.body;
//     let updatedChat = await Chat.findByIdAndUpdate(
//         id, { message: msg },
//         { runValidators: true, new: true }
//     );
//     console.log(updatedChat);
//     res.redirect("/chats");
// })

app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
      let { message:msg} = req.body;
    console.log("mag", msg);
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { message: msg },
      { runValidators: true, new: true }
    );
    if (!updatedChat) {
      return res.status(404).send("Chat not found");
    }
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//destroy
app.delete("/chats/:id", async (req, res) => {
  try{
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
  } catch (err) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
})

// lecture 7 44
// make fn that take fn is argu and return fn 
//now use this instance of try catch is above route 
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      next(err);
    })
  }
}






//new -> show route
// app.get("/chats/:id", async (req, res, next) => {
//   let { id } = req.params;
//   let chatInstance = await Chat.findById(id); // Changed 'chat' to 'chatInstance'
//   if (!chatInstance) {
//     //this not work now as normal for async func
//     // throw new expressError(404, "Chat not found or deleted");
//     return next(new expressError(404, "Chat not found or deleted"));
//   }
//   res.render("edit.ejs", { chat: chatInstance }); // Pass 'chatInstance' as 'chat' to the template
// });


// lecture 44 5
// new  - show route  it give error so use above one
app.get("/chats/:id",asyncWrap (async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
     next(new expressError(404, "chat not found or deleted"));
  }
  res.render("edit.ejs", { chat });
}));
 

//fo validation err specific 
const handleValidationErr = (err) => {
  console.log("Validtion error occured");
  // console.dir(err.message);
  
  return err;
};

// err name 
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

//throw this the asynic function 
app.use((err, req, res, next) => {
  let { status = 500, message = "some err" } = err;
  res.status(status).send(message);
});







app.get("/", (req, res) => {
    res.send("hi")
    
})

const port = 3000;
app.listen(port, () => {
    console.log(`listen in port ${port}`);
})