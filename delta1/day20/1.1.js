// file: example.js

// Log the value of `this` at the top level
console.log("Top-Level this:", this); // Outputs: {}

this.message = "Hello from module!"; // Adding a property to `module.exports`

// Export an object with a property
module.exports = {
  greeting: this.message,
};

// Function to show `this` within a function
function showThis() {
  console.log("Inside function this:", this); // Outputs: global object
}

showThis(); // Call the function
console.log("now", this); // this refer the module.exprots 
