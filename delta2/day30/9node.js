// NPM (node package manager)

// npm is the standard package manager for node.js..

// library(stor package of node) of package( not libray of package let imagin)
//store package

// package : code of other developer the can use in project

// command line tool (install package using command line)

// npm is pre install with node js
// it must explore below
// write  npm in terminal the will show all the commad( to verify install or not)


// what is npm ?
// What is npm?
// npm stands for Node Package Manager and is the default package manager for Node.js. It allows developers to install, share, and manage packages (libraries, tools, or modules) for their Node.js applications.

// Key aspects of npm:

// Package management: Allows you to install open-source packages and manage their versions.
// Project dependency management: Helps maintain project dependencies and ensures consistency across environments.
// npm registry: A vast collection of open-source packages published by developers around the world.
// Command-line tool: Provides commands like npm install, npm init, npm run to manage packages and scripts within Node.js projects.

// Example:
// npm install express
// This command installs the express package and adds it to your project.

// Why is npm Used?
// Package distribution: npm is the primary tool for discovering and using third-party libraries in Node.js projects.
// Dependency management: Helps manage project dependencies and versions through the package.json file.
// Ease of use: npm provides an easy way to install, update, and remove packages.
// Community: npm has the largest ecosystem of open-source libraries, allowing developers to reuse code, speeding up development.


// what are the alternative of npm and why it use
// There are several alternatives to npm, and they are used for various reasons, like performance, specific feature needs, or preference.

// npm: Default package manager for Node.js, vast package ecosystem.
// Yarn: Focuses on speed, consistency, and offline capabilities.
// pnpm: Efficient in terms of disk space, faster installation with stricter dependency management.
// Bun: Optimized for speed with built-in features beyond package management.
// Each package manager has its strengths, and the choice depends on the project requirements, team preferences, and the need for features like performance, security, and disk space efficiency.









// lecture 10
// installing packages
// npm install <package>
// npmjs.com website read the documentation


// npm install figlet (google )
//  npm i(alyais of install) figlet

// package install in specific directory b/c it scope only to specific directory

// Installing Packages
// intalling packages have the follwing improtant file must to understand

// 1 node_modules
// the node_modules folder contains every installed dependency(react ,express.js etc) for your project.
// it delete if send code to other
// no change in node-modules (jisa hy wesa hy tik no change)


// 2 package-lock.json
// The package-lock.json file is automatically generated when you install a package using npm.
// It records the exact version of every installed dependency, including all sub-dependencies and their versions.
// Benefits:
// Ensures consistent installations across different environments by locking dependencies to specific versions.
// Helps avoid issues that might arise from version discrepancies when different developers are working on the same project or when deploying to production.

// Requiring Local Files:
// if you require a package no need for slash and dott  ... as in local file require
// For local files (e.g., your own modules or scripts), you need to include the relative path using ./ (current directory) or ../ (parent directory).

// when you install a packagae in folder in a folder you  write code for your project .... with file create  index.js












// leature 11
// Package.json
// simmilar to packg-lock.json but more descriptive

// the package.json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies

// very importan note
// if you uplode project to github only package.json file it have necceasary info abovt project ...node_modules delete no matter

// we install node module with the help of package.json file

// if you write in command line( npm install)) ..automatically install all the dependencey that in package.json file

//for uninstall ..npm uninstall packageName

// if you want package.json for you project simply write the follwing command
// npm init  // init mean initialise
// if you create is with defult setting than write
// npm init -y

// if you install package in project folder than atuomatically add in package.json file



// lecture 12
// Local vs global
// local instalition is the best practice

// if you intrest in golbal installition than google not working .. no need global installition

// npm install -g <-package name ->
// npm link <-packagename->






// lecture 13

// Require vs import
// import {sum} "./math.js"

// we can't selectively load only the pieces we need with require but with import, we can selectiverly load only the pieces we need, which can save memory .

// Loading is synchronous for "requre" but can be asynchronous for "import"

// import after E6
// in project use only one -> import or require
// alwys use package.json in project 
// "type": "module" (use import and exprot)


// snychronuse mean sequnce is important
// asnychronous mean not sequnce is important

// their are some package in npm that not require import that as random words

// as 
import { generate, count } from "random-words"
console.log(generate()); // the will generate random word