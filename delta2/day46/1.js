// mongo relatonships
// relelationship like sql to connect two table using  forign key as  such how to make in mongodb

// Relationships
// sql (via foreign keys )
//cardinality
// .one to one (one state have only one prime minester)
// one to many
// many to many












// lecture 2
// one to many
// (user -> create multiple post while post created by one person)
//which is best relational or non relational dbs (sql vs mongodb)
// many to many  /// create subject and student










// lecture 3
// Mongo Relationships
// one to many relationship divid into 3 catigary
// 1: 1 to less than 1000 mean
// 2 : in thousands
// 3 : in karor lak

// One to Many / Approach 1 (one to few ) //mean relation with few as 1 to less than 1000
//Store the child document inside parent

// eg order eating thing normal from home hostal office etc but few address

// not make moddle for those who not use as indivual eg address use in the follwing example (addres always store any user must link with user )..
// {
//     _id: ObjectId("23l3u4i45i333i34"),
//         username : 'rahole',
//         adrees: [
//             { location: 'bajwar rode munda', city: 'khar' },
//             { location: 'bajwar smarbagh', city: 'mskiny' },
            
//     ],
//     __v : 1
            
// },

//relationship little bit difficulte  mongodb as compare to sql



// lecture 4
// 1: 1 to less than 1000 mean
//one to few
// create moddle folder
// create user.js










// lecture 5
// Mongo Relationships
// One to Many / Approach 2
// store a reference(pointer ) to the child document inside parent
// refernce best example to invest in gold one is actul gold you purchas and other is you give money other he purchas gold and show paper(sbot) .. sbot is reference

// {
//     _id: Object("lj34234234234 ")
//     name: 'janseb',
//         orders : [
//             Objectid("n3l3n4333")
//             Objectid("4n3l23l234")
//     ],
//             __v : 0
// }









// lecture 6
// create customer file






// lecture 7

// Mongo Relationships
// One to Many (populate)
// using populate

// use populate to print all the object instaned of his _id..





//lecture 8
// MOngo Relationships
// one to Many / Approach 3 (one to squilliions(milon or billion connect points))
//Store a reference to the parent document inside child

// create post file



// lecutre 9

// read  documentataion on mongodb website title
// ** 6 Rules of Thumb for MongoDB Schema ** (explian all the case which do as in the above )

//denromalization ? in dbs 








