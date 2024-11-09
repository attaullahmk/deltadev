const mongoose = require("mongoose")
const { Schema } = mongoose;
const MONGO_URL = "mongodb://127.0.0.1:27017/relationDemo";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {// crate id for addresses also ..so you want to not create id so write 
      _id: false, /// mongodb create automitically _id so prevent write it 
      location: String,
      city : String
    }
  ]
})

const User = mongoose.model("User", userSchema);

// appoach 1 
const addUser = async () => {
  let user1 = new User({
    username: "khan",
    addresses: [{
      location: "monogy",
      city: "munda"
    }]
  });
  user1.addresses.push({ location: "nawaabad", city: "location" });// add other location
  let result = await user1.save();
  console.log(result);
  
} 

addUser();



