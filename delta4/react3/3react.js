// lecture 1 
// events in React
// Handling Click Events

import { useState } from "react";

function doSomething() {
    console.log("button was clicked");
}

export default function button() {
    // return (
        //    <>
        //     <button onClick={doSomething}> Click me!</button>
        //     </>
    // );
}











// lecture 2
// EVents in React
// handling Non-Click Events

function handleHover() {
    console.log("hover");
}

export default function button() {
    return (
        <div>
            <button onMouseOver={handleHover}>Hover Over me!</button>
        </div>
    )    
}




// lecuture 3
// Event Object
//we can access the event object in handler

function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
}
export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
                <button>submit</button>
            </form>
    )
}



// lecture 4
//State in React
// the state is a built-in React object that is used to contain data or information about the component.
// A component's state can change over time; whenever it changes, the component re-render.

// props are immutable




// lecture 5
// Hooks were a new addition in React 16.8.
// They let you use state and other react features without writing a class.

// class components vs functional components



// lec 6
// useState()
// useState  is a React Hook that lets you add a state variable to your component.

const [state, setState] = useState(initialState);
// useState return an array with exactly two value;
// 1 the current state. During the first render, it will match the initailState you have passed.
// 2 the set function that lets you update the state to a different value and trigger a re-render.





// lec 7
// create likeButton
// useState is a react hook the lets you addd a state variable to your component.
// state vraible only use in function compunent .. can use multiple state



// lec 8
// closure
// a closure is a feature in javaScript where an inner function has access to the outer (enclosing) functions's variables.

// ** in Js once a function completes its execution, any variables that were defined inside the function scope cease to exist.

function outer() {
    var b = 10;
    function inner() {
        var a = 20;
        console.log(a + b);
    }
    return inner;
}




// lec 09
// Re-render : how it works?
export default function Counter() {
    let [count, setCount] = useState(0); // initailization
    console.log("component is re-executed");
    console.log(`count = ${count}`);
    // print 0 in first stage change value in the render time 

    let incCount = () => {
        setCount(count + 1);
        console.log(`new value of count = ${count}`);
    };
    return (
        <>
            <P> Count = {count}</P>
            <button>onClick={ incCount } Increase count </button>
        </>
    )
}



// lec 10
// callback in Updater Function
// how to change state when it depends on the current value .
export default function Counter() {
    let [count, setCount] = useState(0); // initailization
    console.log("component is re-executed");
    console.log(`count = ${count}`);
    // print 0 in first stage change value in the render time 

    let incCount = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        console.log(`new value of count = ${count}`);
    };
    return (
        <>
            <P> Count = {count}</P>
            <button>onClick={ incCount } Increase count </button>
        </>
    )
}

// the above not wroking as normal to expected form the program you want to be display ...the only change 1 by 1 no matter how many time setCount write .... the asychronus so result is unexpected is normal

// to do the give result as you want to increase 2 by 2 etc so use the callback

export default function Counter() {
    let [count, setCount] = useState(0); // initailization
    console.log("component is re-executed");
    console.log(`count = ${count}`);
    // print 0 in first stage change value in the render time 

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        // set fix value 
        // setCount(23);
    };
    return (
        <>
            <P> Count = {count}</P>
            <button>onClick={ incCount } Increase count </button>
        </>
    )
}



// lec 11
// more about state 

export default function Counter() {
    let [count, setCount] = useState(0); // initailization
    console.log("component is re-executed"); // re-render the if not change the state
    console.log(`count = ${count}`);
    // print 0 in first stage change value in the render time 

    let incCount = () => {
       setCount(23); // if not change the value of the state than react not re-render the value react save the resource ...
    };
    return (
        <>
            <P> Count = {count}</P>
            <button>onClick={ incCount } Increase count </button>
        </>
    )
}


// you can pass function in useState()
function init() {
    return Math.random();
}
    // let [count, setCount] = useState(init());
let [count, setCount] = useState(init);
    // not function call while pass to usestate pass as refernce to usestate function ..















