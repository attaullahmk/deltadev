// REACT
// React is a JavaScript library created by Facebook for building user interfaces (UIs). It allows developers to build web applications in a declarative way using components.
// React is still maintained by Meta (formerly Facebook), and the official documentation is found at react.dev.

// js library for creating UI
// react create facebook still maintain facebook
// offical documentation (page) -> react.dev

// revise all js concept to start react


// react -> create user interface from components
// component are individual pieces of interface ... butten video ..

// component is a pice of code that  have own html and js code to write logic....

// components like a function reusable code components also use multiple time for same vedio button in vidio...
// commponets write in herarichy component into component

// function call to use while components render to use

// components have it own logic (html css js )

// react not pure js not html  if you run react code as normal in vscode give error

// react code writen in special syntax called jsx






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
// set up local Envirenment
// create-react-app  V/S Vite(2020)  (read blog why is vit is better than cra)
// google = vs
// react-app is old tools
// vite(vite frnch word mean fast) is fast
//  npm help config

// to start
// 1 create folder in which you can make project
// in terminal -> npm create vite@latest -> select -> react _> javaScript -> npm install -> last->  npm run dev


// rup app ->  delta4\react1\Freact\fpoject

// file extention best to write .jsx but can write js













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
{/* <Title> </Title>   <Title /> */}

 // if use one tage must to be close if use opening tage
// use paranthesis () while return any tage




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
// jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);






// letcure 9
// React Fragment (small pice)
// Fragments let you group a list of childern without adding extra nodes to the DOM

//if call component in app and wrip in div tag the add extra div tag to aovid extra div follwing tag

// use <> </>  intance of div tag to avid extra div
// <> </> this tag only one use in life to combine multiple tag
// react fragment -> <> </>
// that can verify in inspect of browser





// lecture 10

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
// Sturcturing Components
// create product Component
// make hirarchy to build react components
// google =?





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
// className is same the component..
// google webpack
// functionality of export and import due to the webpack in react