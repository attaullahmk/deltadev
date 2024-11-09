// Promise
// then() and catch
// promise method then and catch 

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("succes: data was saved");
    } else {
      reject("failure : weak connection");
    }
  });
}


// console.log(savetoDb("appna collage"));
let request = savetoDb("appnacollage");//requset = promise obj
// request
//     .then(() => {
//       console.log("promise resoved");
//       console.log(request);

//     })
//     .catch(() => {
//       console.log("promise rejected");
//       console.log(request);
//     });

// console.log(request); // no need to must to write than and catch method


// short syntax
// savetoDb("appna collage")
//   .then(() => {
//     console.log("promise resoved");
//     // console.log(request);
//   })
//   .catch(() => {
//     console.log("promise rejected");
//     // console.log(request);
//   });












// leture 9
// Promise chining
// improved version

// savetoDb("appna collage")
//   .then(() => {
//     console.log("promis1 resoved");
//     savetoDb("hello world")
//       .then(() => {
//         console.log("promise2 resoved");
//       })
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   });



// best than above(improve version)
// as like multiple try with one catch
// this is promis chain
// savetoDb("appna collage")
//   .then(() => {
//     console.log("promis1 resoved");
//     return savetoDb("hello world");
//   })
//   .then(() => {
//     console.log("promise2 resoved");
//     return savetoDb(" shardha");
//   })
//   .then(() => {
//     console.log("promise3 resoved");
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   });







// lecture 10
// promises
// Promise are reject and resolve with some data (valid results or error)


// result value is resolve and reject message 
savetoDb("appna collage")
  .then((result) => {
    console.log("result : ", result);
    console.log("promise1 resoved");
    return savetoDb("hellow word");
  })
    .then((result) => {
    console.log("result : ", result);
    console.log("promise2 resoved");
  })
    .catch((error) => {
      console.log("error : ", error);
      console.log("promise rejected");
      
  });







  

  // lecuture 11
// Promise
// lets apply promises to our callback hell 
// apply in leture 5 
