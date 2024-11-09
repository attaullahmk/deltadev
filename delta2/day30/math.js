const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const Pi = 3.14;

// module.exports = 123;
// if only export write give error as... export = 34;
// module is object to sent file in one folder



// to use the code of this file make obj( one of the best way can use other method)
let obj = {
    sum: sum,
    mul: mul,
    g: g,
    Pi: Pi
};
module.exports = obj; // module.exports one possible other will be ignore and exports possible for every obj array ...
//multiple exports also possible with dot opretor as follwing 






// other waye if you use direct

// module.exports ={
//     sum: sum,
//     mul: mul,
//     g: g,
//     Pi: Pi
// };


// other  waye if use one function or variable use dot 

// module.exports.sum = (a, b) => a + b;

// if you use only exports is also valid
// exports.sum = (a, b) => a + b;

// if you use only export and than dircet use as follwing than give error

// export = 4;  // it give erorr 
// it will treat is normal value only treat is a variable... moduls.export if make a obj
// export as treat is obj 