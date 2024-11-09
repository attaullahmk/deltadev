// set setTimeout fucntion 
// window obj function inbulit function
//summary
// In Browsers: setTimeout is a method of the window object.
// In Node.js: setTimeout is a method of the global object (global).
// In both environments, setTimeout is used to execute a function after a specified delay in milliseconds.

// global obj 
setTimeout(() => console.log("Hello"), 1000);


//window obj 
// In a web browser, setTimeout is a method of the window object, which means you can access it as window.setTimeout or simply setTimeout:
// Both are equivalent
// window.setTimeout(() => console.log('Hello'), 1000);
// setTimeout(() => console.log('Hello'), 1000);



// setTimeout(function, timeout);
// it count time in ms  1000 =1 sec
console.log("hi there");
setTimeout(() => {
    console.log("Atta ullah");
    // this is callback
}, 3000); // 4000 is timeout argument

console.log("welcome to ");

// this normal use in API call 





// lecture 6
// set intervel (do some task after interl time but timeout only one time do task)
// setInterval(function, Timeout)


 let id1 =setInterval(() => {
    console.log("attaullahmk")
 }, 1000);

clearInterval(id1);

 let id2 =setInterval(() => {
    console.log("mk")
}, 2000);

console.log("how to stop");
// console.log(id1); //this intervel id (it show in browser conlse number 1 2 etc)
// clearInterval(id1); // this use to stop 

clearInterval(id2);