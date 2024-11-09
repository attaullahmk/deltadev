const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
  .then(() => {
    console.log("connection succuss");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "babbr",
    to: "sharda",
    message: "send me you exam cheets",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "amna",
    message: "send me your book",
    created_at: new Date(),
  },
  {
    from: "gullchaht",
    to: "gullzaman",
    message: "send me you photo",
    created_at: new Date(),
  },
  {
    from: "ms mardan",
    to: "ishaq",
    message: "send me you  ld al fo akl",
    created_at: new Date(),
  },
];




Chat.insertMany(allChats);



