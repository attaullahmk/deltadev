
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

  const orderSchema = new Schema({
      item: String,
      price : Number,
  });

  
  const addOrders = async () => {
    let res = await Order.insertMany([
        { item: "samosa", price: 12 },
        { item: "chips", price: 10 },
        { item: "Choclate", price: 80 }
    ]);
console.log(res);

}

// addOrders();



const customeSchema = new Schema({
    name: String,
    orders: [
        {
          type: Schema.Types.ObjectId,
          ref : "Order"
        }
      ]
})



    
// mongoose middleware 
customeSchema.pre("findOneAndDelete", async function () {
  console.log("PRE middleware");
});

customeSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
        // $in operater use to find the order which match with cunstomer.orders
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
        
      }
})
    
    const Order = mongoose.model("Order", orderSchema);
    const Customer = mongoose.model("Customer", customeSchema);



const findCutomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
}

// findCutomer();







// lecture 1  47 

const addCust = async () => {
  let newCust = new Customer({
    name: "khangull"
  });
  let newOrder = new Order({
    item: "march",
    price: 40
  });

  newCust.orders.push(newOrder);
  await newOrder.save();
  await newCust.save();

  console.log("added new customer ")
}
// addCust();
// that only delete the customer not delte it order varify in database

// so that wrok do with the help of middleware
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("66c56f51b7fcae3508c89208");
  console.log(data);
}
delCust();