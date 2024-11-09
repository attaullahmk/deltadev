function suma(...args) {
    // arguments
    for (let i = 0; i < args.length; i++){
        console.log("you give us: ", args[i]);
    }
    // return 0;
}
console.log(suma(3, 5, 3, 5, 6, 4, 5, 3));


// rest (opposite to spread)
// Allows a function to take an indefinite number of arguments and bundle them in an array

// min function use rest to store multiple value
console.log(" minmum " , Math.min(2, 3, 4, 4, 3, 2, 88)); 



// if write additional argument write before rest
function sum(msg, ...args) {
  console.log("msg ", msg);
  return args.reduce((add, el) => add + el);
}
console.log( "sum is ", sum(3, 5, 3, 5, 6, 4, 5, 3));
// sum(3, 4, 5, 23, 4);


function sum(...args) {  // rest is array of arguments
// just for understinding 
  console.log("argumehts", arguments);  //collection 
  // console.log("args", args); // array 
  
    return args.reduce((add, el) => add + el);
    

  // return arguments.reduce((add, el) => add + el);
  // it will give error b/c arguments not a array it collection and reduce method use for array  index etc work for arguments while method not work for argument pop push reduce etc
  // very very improntant 
  // aguments is collection so use rest to convert indivile element into array than apply array method b/c array method not apply on collection 
}

console.log(sum(3, 5, 3, 5, 6, 4, 5, 3));
// take multiple arguments as you want



// function min(...args) {
function min() {
  console.log(arguments);
  // console.log(args);
  // args.pop();
  // console.log(args);
    console.log(arguments.length);
    console.log(arguments[1]);

    // arguments.push(2); // it will give error b/c it not a array it is collection
    // so  use rest to perfrom this operation on array argument
}
console.log(min(2, 3, 4, 5));
