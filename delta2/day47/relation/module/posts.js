// appoach 3
// best example of socail media post create by one user multiple post so best to store id of user in post rather than store post in user document 

const mongoose = require("mongoose");
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
  email : String,
});
const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
const User = mongoose.model("User", userSchema)
const Post = mongoose.model("Post", postSchema)


const addData = async () => {
    // let user1 = new User({
    //     username: "raholkumar",
    //     email: "hi@gmail.com"
    // });
    let user = await User.findOne({ username: "raholkumar" });

    // create 3 post 
    let post1 = new Post({
        content: " i am fine and you",
        likes: 9,
    });

    post1.user = user;
    // await user1.save();
    await post1.save();
}

// addData();


const getData = async () => {
    // let result = await Post.findOne({}).populate("user");
    // for specifice field
    let result = await Post.findOne({}).populate("user", "username");
    console.log(result);
}
getData();