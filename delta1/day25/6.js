// lecture 6
// Promises
// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    // console.log("your data was saved: ", data);
    success();
  } else {
    // console.log("weak connection. data not saved");
    failure();
  }
}



// callback hell  to avoid this type situation use pormisis
  savetoDb(
    "appna colleage",
    () => {
      console.log("succes your data was saved: ");
      savetoDb(
        "hellow world",
        () => {
          console.log("success2: data2 saved");
        },
        () => {
          console.log("failure2 week connection");
        }
      );
    },
    () => {
      console.log("weak connection. data not saved");
    }
  );