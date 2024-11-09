// lecture 1
// async function
// async and await keywords

// async keyword
// create an async function
// async function great() {
  // return "hellow world"; // returns a promise
  // even not write any thing in function the retrun promise
// }
// great();
// console.log(great());

// async function return Promise  write or not return ...

// make arrow function async
let hello = async () => { return 5}; // returns a promis
hello();
// console.log(hello()); // the bydefult return promise





let err = async () => {
  abc.abc();
  return "hello error";
  // the will return  rejection b/c abc not method not define
  // retrun promise if error the reject if run success the resolve state 
}

// console.log(err());



// // throw keyword also use for retrun some error
async function great() {
  throw "week connection";
  return "hellow world";
}

// great();

// great()
//   .then((result) => {
//     console.log("promise was successful");
//     console.log("result was : ", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected with err::", err);
//   });









// //   lecture 2
// // await keyword
// // pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)




function getName() {
    // console.log(5);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let num = Math.floor(Math.random() * 10) + 1;
          console.log(num);
          resolve("print random number ");


          // for understinding 
          // if(num>5) resolve();
            // return num;
        } , 1000);
        })
}
// await keyword only use in async function
// await keywort use in one task not complete untill waiting for execution of other task 
async function demo() {
  await getName();
  let a = await getName(); // retrun print random number 
  console.log(a);
  
    await getName();
    await getName();
}

// demo();



// code for color change
h1 = document.querySelector("h1");

function colorChange(color, deley) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, deley);
  });
}

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completerd");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completerd");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("green color was completerd");
//     return changeColor("blue", 1000);
//   });

// short using async function
// async function show() {
//   await colorChange("violet", 1000);
//   await colorChange("indigo", 1000);
//   await colorChange("green", 1000);
//   await colorChange("yellow", 1000);
//   await colorChange("orange", 1000);
//   await colorChange("red", 1000);
//   return "done";
// }

// show();




















// lecuture 3
// await keyword
// Handling rejections with await 

h1 = document.querySelector("h1");

function colorChange(color, deley) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
        let num = Math.floor(Math.random() * 5) + 1;
        if (num > 3) {
            reject("promise rejected");
        }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, deley);
  });
}


// async function show() {
    
//   await colorChange("violet", 1000);
//   await colorChange("indigo", 1000);
//   await colorChange("green", 1000);
//   await colorChange("yellow", 1000);
//   await colorChange("orange", 1000);
//   await colorChange("red", 1000);

//   // if error occur in some piont rest of the code not execute  so use try and catch as follwing 
//     let a = 5;
//     console.log(a);
//     console.log("new number =", a + 3);
    
// }

// try and catch 

async function show() {
    try{
  await colorChange("violet", 1000);
  await colorChange("indigo", 1000);
  await colorChange("green", 1000);
  await colorChange("yellow", 1000);
  await colorChange("orange", 1000);
  await colorChange("red", 1000);
    }
    catch (err) { 
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number =", a + 3);
    
}

show();
