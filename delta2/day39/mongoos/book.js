// delta2\day39\mongoos
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

//schema for book
const bookSchema = new mongoose.Schema({
  //title :string , this is also ture but for one constraint while multiple use follwing one is best 
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number, // it mean if inter number the store in db in number form -> costing or parsing
  },
});


// to make collection
const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "mathematics",
    author: "imrankhan",
    price: 24,
});

book1
    .save()
    .then((res) => {
    console.log(res);
    })
    .catch((err) => {
    console.log(err);
});
