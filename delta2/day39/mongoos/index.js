// delta2\day39\mongoos
const mongoose = require("mongoose");

// lecture 3dd
// this methos use to connect with mongodb
// like url = "https://localhost:3000/users"
// mongoose.connect("mongodb://127.0.0.1:27017/test");
// this above line show start in terminal actual the wait for promise to return .. 
// port number is same every monogdb sever (every machine)
// in old documentation write localhost =127.0.0.1 but now use 127.0.0.1


//(same) async way to deal with above (return promise so apply then catch function)
main().then(() => {
    console.log("connection successfull");
})
.catch ((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// must first start mongodb server form termil
//we set above connecton with mongodb now we do crud opretion



// lecture 3 
// userScheme >overall structure of collection
const userScheme = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})
// type is casesensitive so start with capital letter 
// data type start with capital letter




// lecture 4 
// User Collection  while userScheme is Schema
const User = mongoose.model("User", userScheme);
// User is model while "User" collection genrally both name are same
// const Emplyee = mongoose.model("Emplyee", userScheme);

// change the name with plular(jama s  add with first letter change to small ) in dbs






// lecture 5
// const user1 = new User({ name: "Adam", email: "adam@gmail.com", age: 48 });
// user1.save();

// const user2 = new User({ name: "eve", email: "eve@gmail.com", age: 49 });
// return promise so use then and catch
// user2.save().then((res )=> {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })



// lecture 6 
// User.insertMany([
//   { name: "khan", email: "evaa@gmail.com", age: 39 },
//   { name: "jan", email: "evebb@gmail.com", age: 7 },
//   { name: "love", email: "evecc@gmail.com", age: 40 },
// ]).then((data) => {
//     console.log(data);
// })











// letcture 7
// use find function the return all the data
// User.find({ age: { $gte: 49 } }).then((data) => {
//   console.log(data);
// });

// User.findOne({ age: { $gte: 47 } }).then((data) => {
//   console.log(data); // if only name is print
// });


// by id
// User.findOne({ _id: "66364e7b21ab61e1c6873435" }).then((data) => {
//   console.log(data); // if only name is print
// });

