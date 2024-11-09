// lecutre 1
// Handling Deletion
// (delete one accunt also delete its post as social media)
// using Mongoose Middleware // use to easy work as above mention 
//read the mongoose site to read the mongoose middleware 

const review = require("../day41/wanderlust/models/review");

//we can use 2 middlewares:
// pre-run before the query is executed
// Post-run after the query is executed
 
customerSchema.Post("findeOneAndDelete", async (customer) => {
    if (customer.order.length) {
        let res = await Oder.deleteMany({ _id: { $in: customer.order } });
    }
})


// query middleware => mongoose doc =?




// lecture 2
// as above in detail (continue )
//we can use 2 middlewares:
// pre-run before the query is executed
// Post-run after the query is executed


//findByIDAndDelete call findOneAndeDelete (middleware)





//lecture 3 (project )
// New  model : Reviews
// comment
// rating (1 to 5)
// createdAt





// lecture 4

// Create Reviews
//2 step process to create reviews
// 1. Setting up the Reviews Form
// in the show.ejs file b/c if go hotal than give review




// lecture 5
// Create review
//2 submitting the Form
// POST / listings/:id/reviews



//lecture 6
//validation for reviews (both side )







// lecutre 7 Render Reviews
//in show page
// use populate method to pass the review data to ejs template



//lecture 8
// adding Style to reviews
// show in the card form






//lecture 9
//Deleting Reviews
//Mongo $pull operator
//$pull :> the $pull operator remove from on existing array all instances of a value or values that match a specified condition.

//listing/:id/reviews/:reiviewId




// lecture 10
//oposite as the above

//Deleting Listing
// Delete Middleware fo reviews 
// listing.js module
// if delete listing how to delete it reviews 