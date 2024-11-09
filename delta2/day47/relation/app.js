//  cd delta2\day46\relation
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/relation"
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
 async function main() {
    await mongoose.connect(url);
}




app.get("/", (req, res) => {
    res.send("this route path")
})


app.listen(port, () => {
    console.log(`listen in port :${port}`);
    
})
