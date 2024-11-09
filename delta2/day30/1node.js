// Node.js was created by Ryan Dahl in 2009 while he was working for **Joyent**, a cloud computing and hosting company. Joyent played a major role in the development and maintenance of Node.js during its early years.

// Although Ryan Dahl created Node.js, its growth and widespread adoption were significantly supported by **Joyent**, which managed its development and infrastructure for several years.


// Currently, Node.js is managed by the OpenJS Foundation, which is part of the Linux Foundation. The OpenJS Foundation was created in 2019 to oversee the development and support of the JavaScript ecosystem, including Node.js



// ##JavaScript Origins
// JavaScript (JS) was initially created to run exclusively in web browsers, primarily for client-side (frontend) programming.
// Browsers, like Google Chrome, use JavaScript engines to interpret and execute JS code. For instance, Chrome uses the V8 JavaScript engine.


// Introduction of Node.js
// Node.js was released in 2009 and revolutionized JavaScript by enabling it to run outside the browser.
// It provides a JavaScript runtime environment, allowing JS to be used for server-side programming.

// Why Node.js Was Created
// Before Node.js, JavaScript was confined to the browser, limiting its use to frontend development.
// The need arose for a unified language that could be used across both the frontend and backend of applications, reducing the complexity of maintaining separate codebases.


// Key Reasons for Node.js Popularity
// JavaScript-based: Since JavaScript is one of the most popular programming languages, developers can use their existing knowledge to build server-side applications with Node.js.

// Asynchronous, event-driven architecture: Node.js excels at handling large numbers of simultaneous connections, making it ideal for building scalable network applications.
// Fast performance: Thanks to the V8 engine, Node.js can execute JavaScript code with high speed and efficiency.
// Non-blocking I/O: Its non-blocking I/O model is particularly suited for real-time applications like chat applications and online games.
// Package ecosystem: With npm (Node Package Manager), Node.js has the largest open-source library ecosystem, enabling quick and easy integration of third-party packages and tools.



// Applications of Node.js
// Server-side web development: Node.js is commonly used to build scalable backend services, APIs, and microservices.
// Command-line tools: Node.js is frequently used to create tools for automating workflows and managing development environments.
// Game development: Node.js can be used to develop real-time multiplayer games due to its fast networking capabilities.
// IoT and robotics: Some IoT devices, such as drones and embedded systems, leverage Node.js for control and data processing.
// Cross-platform applications: Tools like Electron, which is based on Node.js, allow developers to create desktop applications. For example, Visual Studio Code is built using Electron and Node.js.
// What Node.js Is Not
// Node.js is not a language, library, or framework. It is a runtime environment that allows developers to run JavaScript code outside of the browser.





// lecture 2
// node installition  node.org to downlod
// https://nodejs.org/en
// to check
// node -v
// node -version



// lecture 3
// instalition vedio but not important on youtube





// lecture 4

// Node.js REPL (Read-Eval-Print Loop)
// REPL stands for Read-Eval-Print Loop, which is an interactive environment for running JavaScript in Node.js.

// To open the Node.js REPL:
// Type node in the terminal or command prompt.
// The REPL allows you to execute JavaScript commands directly. as console.log("hi to every one")

// Basic REPL Commands
// .help: Displays a list of commands available in the Node.js REPL.
// Note: In the Node.js terminal, standard terminal commands like ls or pwd will not work. Only JavaScript commands are valid within this environment.

// Exiting the Node.js REPL
// There are multiple ways to exit the Node.js REPL:
// Ctrl + C (press twice).
// Ctrl + D (press once).
// Type .exit and press Enter.





// Global Object in Node.js
// In a browser environment, the global object is the window object, which contains properties like the DOM and browser-specific APIs.
// In Node.js, the global object is called global, which contains core Node.js functions and variables.
// Note: The DOM does not exist in Node.js, as it’s only relevant to browser environments.
// Accessing the Global Object
// You can type global in the Node.js REPL to view global functions and properties available in Node.js.
// Exiting the Command Prompt (CMD)
// To exit the command prompt (CMD), you can use the exit command. This works in both the standard terminal and the Node.js REPL.


// process vs global Object in Node.js
// global Object:
// The global object is the top-level object in Node.js, similar to the window object in the browser.
// It holds global functions and variables like setTimeout, setInterval, and others that are available globally within the application.

// Examples of global properties:
// console
// setTimeout()
// clearTimeout()
// Buffer



// process Object:
// The process object is a global object, but it is specifically used to interact with the current Node.js process.

// It provides useful methods and properties to manage the runtime environment, such as:

// Information about the system (e.g., memory usage, platform).
// Access to environment variables.
// Control over input/output streams (stdin, stdout).
// Key properties and methods of process:

// process.argv: An array containing command-line arguments passed to the Node.js process.
// process.env: Access to environment variables.
// process.exit(): Ends the Node.js process.
// process.cwd(): Returns the current working directory.
// process.memoryUsage(): Provides memory usage statistics.

// global: The top-level object providing globally available functions and variables in Node.js.
// process: A global object that allows interaction with and control over the running Node.js process.









// lecture 5
// how to run js file in node
// console.log("hi node");

// open folder in which the js code  than write node file name so run js code in terminal




// lecture 6
// Process
// node have by defult object called process
// process: this object provide informatiion about, and control over the current Node.js process.

// cmd -> node -> process
// if  check some node related thing
// Process.version
// Process.release
// Process.cwd();  // current working directory

// console.dir(process.release);

// Process.argv: return an array containing the command-line arguments passed when the Node.js process was launched.
// arguments is input to run file with node

// console.log(process.argv);
// first 2 args have path(executible(node path) and current path(file path)) so start from 2
// delta2\day30> node 1node.js  w e d f s
// let args = process.argv;
// for (let i = 2; i < args.length; i++){
//     console.log("hello to,", args[i]);
// }





// google >   use of process in node ?👇
console.log(process.env); // Outputs environment variables as an object
console.log(process.env.NODE_ENV); // Access a specific environment variable

process.on("SIGINT", () => {
  console.log("SIGINT signal received.");
  process.exit();
});

console.log(`Process uptime: ${process.uptime()} seconds`);

console.log(process.memoryUsage()); // Outputs memory usage statistics
console.log(`Platform: ${process.platform}`); // e.g., 'linux', 'darwin', 'win32'
console.log(`Architecture: ${process.arch}`); // e.g., 'x64', 'arm'



// as this must run from terminal
// node 1node.js imran javed sharda kapra (write in terminal )
// if you pass multiple name and say every one to hello to
// console.log(process.argv);









// lecture 7
// Moduls.exports
// requiring files

// require():  a built-in function to include external modules that exist in separate file.

// Module.exports : a special object
// console.log(someValue);

// if file not export than it print empty obj as require


// if file not export any thing the will print empty object (bydefult moduls.export send empty obj ..but we can made string any thing explictly)
// console.log(math);

// require(): Used to import modules or files.
// module.exports: Used to export functionality from a file. By default, it exports an empty object {} unless something is explicitly assigned.
// You can export anything with module.exports—objects, functions, strings, etc.

// ./ use to access in same folder
const math = require("./math");
// use the code in other file
// console.log(math.sum(3, 5));
// console.log(math.Pi);

// const empty = require('./empty');
// console.log(empty); // Output: {}
// Since empty.js doesn't export anything, Node.js returns an empty object {}.







// lecture 8
// to send data from one drictroy to other
// Moduls.exports
// requiring directories

// require():  a built-in function to include external modules that exist in separate filses.

// create a specail file index.js the require all information from other file in folder is in fruits directory

// Module.exports : a special object(contain all the thing that send to other file)


const fruit = require("./Fruits"); // if exprot and require folder the bydefult search index.js file and require it 
// console.log(fruit[2]);








