// lecture 7
// Promises
// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promises -> object
// resolve and reject


// state of promises
// resolve -> success
// reject -> failure
//pending -> no know success or failure


// not must use reject and resolve use other name but most use that name

// asynchronus mean depend on multiple thning


function savetoDb(data) {
  return new Promise((resolve, reject) => {
  // return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("succes: data was saved");
      // success("data wase saved");
    } else {
      reject("failure : weak connection");
      // failure("week connection ");
    }
  });
}
// savetoDb("appna collage ");
console.log(savetoDb("appna collage"));
