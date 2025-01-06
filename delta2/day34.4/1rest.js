// REST (rule)
// representational State Transfer
// REST is an architectural style that define a set of constraints(rule) to be used for creating web services.

// restfull API
// restfull API use for crud opretion
// search on stackoverflow practice for rest api design

// google  best practice to create restfull api (stackoverflow)





// lecture 2
// CRUD Operations
// GET : retrives resources.
// POST : submits new data to the server
// PUT : update existing data
// PATCH : update existing data partially
// DELETE: removes data

// resource (tweet, user )-> on which crud opretion()





// lecture 3
// Creating RESTful API
// GET  /posts        to get data for all posts(index rout(main))
// POST  / posts        to add a new post (create)
// GET /posts/:id      to get one post (using id)( view rout)
// PATCH (put also write)    /posts/:id    to update specific post(update)
// DELETE  /posts/:id     to delete specific post(destroy root in rest term)





// lecture 4
// Implement : GET /posts
// index Route
// GET  /posts        to get data for all posts







// lecture 5
// implement : Post /posts
// create Route
// post   /posts   to add a new post

// 2 routes
// serve the form     Get    / posts/ new
// add the new post      post    / posts





// lecture 6
// Redirect
// res.redirect(URL);
// google express documentation of redirect



// lecture 7
// implement : GET /post/:id
// show Route
// GET /posts/:id    to get one post (using id )





// lecture 8
// Create id for posts
// uuid package
// universally unique identifier
// npm install uuid



// lecture 9
// Implement : PATCH /posts/:id
// update Route
// Pactch  /posts/:id  to update specific post



// lecture 10
// Create Form for update
// edit Route
// serve the edit form    Get   /posts/:id/edit

// npm install method-override