// lecture 4
// Js is Single Threaded (ik tar jo serf ik kam karty hy ..ik tar per saray ke sary kam chalty hy )
// single threaded mean one time only one thing(code) exicute
// let a = 23;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);
// synchrounes nature



// if js single  thread than why settime fuction wroking
// ans   ->> settimeout function exicute browser so browser writen in c++ language that is multi-threaded
// if time is complete browser automatically add  to call stack for running if time is complete

// make it asynchrounes nature
// setTimeout(() => {
//     console.log("apna collage");
// }, 2000);

// setTimeout(() => {
//     console.log(" again apna collage");
// }, 2000);

// console.log("hello....");












// lecture 6
// "eventual" refers to something that will happen at some point in the future, though the exact timing may be uncertain. It indicates an outcome or result that will occur after a process, development, or a period of time.
//It implies a future event that is expected to happen but not immediately.

// Promises
// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.



// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     console.log("your data was saved: ", data);
//     success();
//   } else {
//     // console.log("weak connection. data not saved");
//     failure();
//   }
// }

// console.log(savetoDb("appna colleage"));
// console.log(
//   savetoDb(
//     "appna colleage",
//     () => {
//         console.log("succes your data was saved: ");
//         savetoDb(
//             "hellow world",
//             () => {
//                 console.log("success2: data2 saved");
//             },
//             () => {
//                 console.log("failure2 week connection");
//             }
//         );
        
//     },
//     () => {
//       console.log("weak connection. data not saved");
//     }
//   )
// );








// lecture 7
// Promises
// the promise object represents the eventual completion (success or failure) of an asynchronous operation and its resulting value.

// Promises -> object
// resolve and reject
// state of promise👇
// resolve -> success(fullfile)
// reject -> failure(reject )
//pending -> no know success or failure


function savetoDb(data) {
  console.log(data);
  
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      // resolve("succes: data was saved");// change resolve or success
      success("succes: data was saved one");
    } else {
      // reject("failure : weak connection");
      failure("failure : weak connection");
    }
  })
}

// than and catch must with promise 
savetoDb("appna collage")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Error caught:", err);
  });