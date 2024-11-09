// appoach 2
// best example of gold to investe in 
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

const Order = mongoose.model("Order", orderSchema);
  
const addOrders = async () => {
    let res = await Order.insertMany([
        { item: "samosa", price: 12 },
        { item: "chips", price: 10 },
        { item: "Choclate", price: 80 }
    ]);
console.log(res);

}

// addOrders();




// read populate in mongoose documentation


const customeSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId, //this use to store obj id which store in other model
            ref : "Order"
        }
    ]
})




const Customer = mongoose.model("Customer", customeSchema);

const addCustomer = async () => {
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });
    let order1 = await Order.findOne({ item: "chips" });
    let order2 = await Order.findOne({ item: "Choclate" });
// push the order not id of ther order in mongoose but in mongodb dbs only store the id of the order
    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
    // thata show in console all the obj while in mongodb only sotor id of the obj
    //confirm 
    let resultdb = await Customer.find({});
    console.log(resultdb);
    
    

}
addCustomer();

// lecture 7
//populate use to replace the obj id with pull obj
// populate mean to add not match the genral english meaning with that senrioe
// use that to extract data so use populate method 
console.log("populate ");

const findCutomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result);
}

findCutomer();