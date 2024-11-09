//advance js concept 

// lecture 1
//call Stack 
// follow FIFO Rule 
function hello() {
    console.log("hello G");
};

function demo() {
    console.log("call other fuction create a stack");
    hello();
    console.log("demoe funsh");
}

demo();
// console.log(demo());







// lecture 2
// Visualizing the call stack 
function one() {
    return 1;
};
// when function retrun value it remove from stack
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    console.log(ans);
};

// value of ans not access out b/c call stack end the than nat access function 


three(); // 3







// lecture 3
// Breakpoint 
// use to tack the call stack in browser 
// very intersting learning
// go browser debuger
//-> browser inspect -> source -> run code(refresh) -> side one one forword move


// youtube chorme debeger course 
