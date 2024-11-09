// if write code and have error stop further execution of code so best waye to execute code to use try catch



// Try and catch must be in pair if write try than it give error  so must write both 


// Try and catch
// the try statement allows you to to define a block of code to be tested for errors while it is being executed.

// the catch statement allows you to define a block of code to be executed, if an error occurs in the try block

// alwys try with catch ... if not give error


// If you try to log `h` without defining it, the code will throw an error and stop execution.
// However, if you use a `try...catch` block, the code within the `catch` block will handle the error,
// allowing the rest of the code to continue executing normally, and the error will be printed.


try {
    //try me oho code leka jata hi jis me shak ho 
    // let a = 23;
    console.log(a);
}

// catch {
//     console.log("varible a doesnt")
// }


// catch use as function 
// err or error any write in argument mean the error wchich occur in try block 
catch (err) {
    // console.log("varible a doesnt")
    console.log(err); //this will print error which one  occur in try 
    
}


console.log("this is great to learn");