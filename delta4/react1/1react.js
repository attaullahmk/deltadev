// REACT
// React is a JavaScript library developed by Facebook (now Meta) for building user interfaces (UIs). 
// It is widely used to create dynamic web applications in a declarative way using components.
// Official documentation is available at: react.dev

// What is React?
// - React is a JavaScript library for creating user interfaces.
// - Originally created by Facebook and still maintained by Meta.
// - Focuses on building UIs through reusable, independent components.

// Starting with React:
// - To learn React, it is important to revise fundamental JavaScript concepts as React relies heavily on JavaScript.
// - React uses a unique syntax called JSX, which combines HTML-like syntax with JavaScript logic.

// Core Concept: Components
// - Components are the building blocks of React applications.
// - A component is a self-contained piece of code that includes its own HTML, CSS, and JavaScript for logic.
// - Components can represent individual interface elements like buttons, videos, or forms.

// Features of Components:
// 1.  Reusable : Components can be reused in multiple parts of an application. For example, a button component can be used in multiple places.
// 2.  Composable : Components can be nested inside other components, forming a hierarchy (e.g., a video component inside a media player component).
// 3.  Function-Like : Components are like JavaScript functions; they accept inputs (props) and return UI elements.
// 4.  Encapsulation : Each component has its own logic and styling, making it modular and easy to maintain.

// JSX (JavaScript XML):
// - React uses a special syntax called JSX to write components.
// - JSX allows you to write HTML-like code alongside JavaScript logic.
// - JSX code must be compiled (e.g., by Babel) into plain JavaScript to run in the browser.
// - React code written in JSX cannot be run directly in a regular JavaScript environment without a build tool.

// Example of a React Component:
import React from 'react';

// Define a functional component
function ButtonComponent() {
  return (
    <button onClick={() => alert('Button Clicked!')}> Click Me </button>
  );
}

// Use the component
function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <ButtonComponent />
    </div>
  );
}

export default App;

// Notes:
// - React code cannot run directly in a plain JavaScript environment or in a browser without transpilation.
// - To set up a React project, use tools like Create React App, Vite, or Next.js.
// - Always remember: React is about building UIs by breaking them into modular, reusable components.







// lecture 2


// JSX -> javaScript Extension Syntax
// JSX (JavaScript XML):
// JSX allows you to write HTML-like syntax directly in JavaScript, which makes it easier to visualize and write UI components.
// JSX is not real JavaScript, so it needs to be transpiled by a tool like Babel into plain JavaScript that browsers can understand.
// Why Use JSX?
// Readability: It’s easier to write and maintain. Instead of using complex JavaScript DOM manipulation methods like document.createElement, you can directly use familiar HTML-like tags.
// Simplicity: JSX simplifies the process of writing React components compared to using vanilla JavaScript to manually create DOM elements.

// Babel:
// Babel is a tool that transpiles JSX (and other modern JavaScript) into older JavaScript that browsers can execute.
// You can check the Babel compiler online at babeljs.io/repl, where you can see how JSX is converted into JavaScript.

// For example, JSX:
// const element = <h1>Hello, world!</h1>;
// Would be transpiled by Babel into:



// js
// const element = React.createElement('h1', null, 'Hello, world!');
// This is why JSX is much easier to use for creating components, as it abstracts away the lower-level DOM manipulation.




// google Babel page -> compare jsx code with js
//bebal convert the react code to the pure js code





// lecture 3
// need some environment to start react code

// Setting Up Environment for React Development

// React code requires a specific setup to run. You need to create a local development environment to build and test React applications.

// Setting Up a Local Environment:
// There are two popular tools for starting React projects:
// 1. Create React App (CRA): An older tool for bootstrapping React apps.
// 2. Vite: A modern and faster alternative to CRA (introduced in 2020).




// Why Choose Vite Over Create React App?
// -  Faster : Vite (a French word meaning "fast") is significantly faster than CRA in both development and build times.
// -  Modern Tooling : Vite uses modern technologies like ES Modules and a highly optimized build process.
// -  Smaller Footprint : Vite produces smaller and optimized builds compared to CRA.
// -  Read More : Search online for "Vite vs Create React App" to explore detailed comparisons.

// Steps to Start a React Project Using Vite:
// 1.  Create a folder  for your project (e.g., `delta4/react1/Freact/fproject`).
// 2. Open the terminal in that folder and follow these commands:
//    ```bash
//    npm create vite@latest
//    ```
//    - Select the project type:  React .
//    - Choose the language:  JavaScript  (or TypeScript if needed).
// 3.  Navigate into the project folder :
//    ```bash
//    cd <your-project-folder>
//    ```
// 4.  Install dependencies :
//    ```bash
//    npm install
//    ```
// 5.  Start the development server :
//    ```bash
//    npm run dev
//    ```

// Notes:
// - `npm create vite@latest` ensures you're using the latest version of the Vite package.
// - `.jsx` is the preferred file extension for React components, but `.js` works too.
// - Use `npm help config` in the terminal to learn about npm configurations.
// - Vite is ideal for modern React projects due to its speed and efficiency.











// lecture 4
// Understanding our app (folder structure )







// lecture 5
// RE-write  app










// lecture 6
// Our 1st component
// component is a reusable and independent piece of code.
// highest level of component of react app is App
// creating a component
// component name start with capital letter
// app()  component only one element(root ->if return multiple write in div) return if write two component the will give error


function Title() {
    return (
        <h1>hellow word! </h1>
    )
}



//Rendering a component
// wirte as html tag to render
{/* <Title> </Title>  or   <Title /> */}

 // if use one tage must to be close if use opening tage
// use paranthesis () while return any tage

// always write component in  separate file even how small the component component name same file of component




// lecture 7
// import-export
// import
// import Title form "./Title.jsx"
// most of the time use the name as file name

// default export (for single value)
// export default Title;
// if default export can give custom name to component in app file while improt ..


// named export (export multiple thing )
// export { Title };
// export { Title , sum , mul};
// also use {} while import (multiple thing)
// import { Title } form "./Title.jsx";


// totaly depend on user export or import

// in summary, named exports are useful when you want to export multiple values and import them with their specific names, while defult export are handy(in urdo "karamad / asan") for exporting a single value and giving it a custom name when importing. The choice between the two depends on the structure and requirements of your codebase.



// Import and Export in React
// React allows developers to organize their code into reusable modules or components, 
// which are shared between files using `import` and `export` statements.

// Importing Components or Modules:
// - Use the `import` keyword to bring in code from other files.
// - Example:
import Title from "./Title.jsx"; // Importing the "Title" component from "Title.jsx"

// It’s common practice to name the component or module the same as the file for clarity.

// Exporting in React:
// - There are two main types of exports in JavaScript:  Default Export  and  Named Export .

// 1.  Default Export :
//    - Used when a file exports a single value (e.g., a React component or a single function).
//    - Syntax:

// export default Title;
// - Importing a default export: // - You can use any name when importing a default export:

// - Importing a default export: // - You can use any name when importing a default export:

import MyCustomName from "./Title.jsx"; // "MyCustomName" can replace "Title"
// 2. Named Export: // - Used when a file exports multiple values (e.g., multiple components or utility functions). // - Syntax:


export const Title = () => <h1>Title Component</h1>;
export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;


// - Importing named exports: // - Use curly braces {} to specify the names:
import { Title, sum, mul } from "./Title.jsx";

// Combining Default and Named Exports: // - A file can have one default export and multiple named exports:
// export default App;
// export const Title = () => <h1>Title Component</h1>;
// export const sum = (a, b) => a + b;

// // - Importing from such a file:
// import App, { Title, sum } from "./Title.jsx";

// Summary: // - Use default export for single values (like a React component). // - Use named export for multiple values in the same file. // - Use {} when importing named exports and omit them for default exports.


















// lecture 8
// Writing Markup In JSX
// 1. Return a single root element
// 2. Close all the tags >> as like <img/> // bebal read the js which have close tage
// 3. camelCase most of the things
// read the official documentaion of the react.dev

// not use  class in div tag as we use id -> b/c class is keyword in js so it not use as a attribute instand of class use classname

// write praranthesis to wrape the return div tag (esay to read)
// google The Rules of jsx ..
// you can use React.Fragment or shorthand <> to avoid extra div wrappers:
//  "fragments" refer to small, incomplete parts or pieces of something larger
// js

return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);






// letcure 9
// React Fragment (small pice)
// Fragments let you group a list of childern without adding extra nodes to the DOM

//if call component in app and wrip in div tag the add extra div tag to aovid extra div. use the follwing tag

// use <> </>  intance of div tag to avid extra div
// <> </> this tag only one use in life to combine multiple tag
// react fragment -> <> </>
// that can verify in inspect of browser





// lecture 10
// javaScript in jsx with curly bracess =? 
// jsx with curly Braces 
function Title() {
    return <p> 2* 2 = {2 * 2} </p>
}
// if write curly braces than write pure js 
function Title() {
    let masg = "helow word"
    return <p> message says {masg.toUpperCase()}</p>
}



// lecture 11
// how to structure components in react
// Sturcturing Components
// create product Component
// make hierarchy to build react components
// if build any component first convert into component than combine in other component


// src/
// ├── components/
// │   ├── Product/
// │   │   ├── Product.jsx
// │   │   ├── ProductImage.jsx
// │   │   ├── ProductDetails.jsx
// │   │   └── AddToCartButton.jsx
// │   └── ProductList.jsx
// └── App.jsx

// Best Practices
// Keep Components Small and Focused:

// Each component should do one thing well.
// Use Clear Naming:

// Name files and components based on their purpose.
// Group Related Files:

// Place related components (like Product, ProductImage, etc.) in a folder.
// Reuse Components:

// Write components that can be used in multiple places to avoid duplication.
// Use Props for Data and Callbacks:

// Pass data (like name, price) and callbacks (like onAddToCart) via props to make components flexible and reusable.




// lecture 12
// Style Components

// import "./product.css";
// export default function Product() {
//     return (
//         <div className = "Product">
            
            
//         <div/>
//     );
// }

// .Product {
//     border: 1px solid white;
//     margin-bottom: 5px;
//     border-radius: 14;
// }


// you can write in same file but best practice to write in separate file 
// in react write css for each element in separate file with same name of component
// className is same the component for outer div of the component ..
// google webpack
// functionality of export and import due to the webpack in react