// DOM Events
// Events are signals that something has occurred/triger. (user inputs/actions)
// inline events
// inline events is not a good practice to do some thing
// possible to write js in in html .. due to inline events as onclick




// lecture 2
// Dom events
// onclick(when an element is clicked )
// onmouseenter(when mouse enters an element )

// this for one element first 
let btn = document.querySelector("button");

// let btnall = document.querySelectorAll("button");
// all the events property start with on ...
// console.dir(btn); // that how lot of property 

btn.onclick = function () {
    console.log("button was clicked");
};

// other waye 
// this work for one btn 
function sayhello() {
    alert("Hello");
}

// btn.onclick = sayhello; // no paranthsis if write paranthsis automatically run if page is load



// for all buton when click pop show 
// for (btn of btnall) {
  // not set bracket in function if bracket with function mean that execut for all in onece if page is laod ....
  // btn.onclick = sayhello(); // it execut for it time 
// not execute the onclick at a time both as normal for more event 
  // btn.onclick = sayhello;
  // btn.onclick = consule;
    // btn.onmouseenter = function () {
        // console.log("hi");
    // }
// }

function consule() {
    
    console.log("hi to every one");
    // alert("hi to every one");
}

// for (btn of btnall) {
//     // btn.onmouseenter = consule;
// }







// 3 method of event handle
// 1 -> inline js
// 2 -> evants
// 3 -> evantslitener



// lecture 3
// Event Listener
// addEventListener
// if you want to execute multiple task(function) with one click not done normaly with onclick or inline method so use eventlistener

// Element.addEventListener(event, clallback)

let btnall = document.querySelectorAll("button");

for (btn of btnall) {
    // btn.addEventListener("click", sayhello);
    btn.addEventListener("click", consule);
  btn.addEventListener("dblclick", dbclick);
  // as both function not possible to exectue with onclick so use addeventlistener 
 
}


function consule() {
  console.log("hi to every one");
}

function sayhello() {
  alert("Hello");
}

function dbclick() {
  console.log("this for double");
}


//google eventlistener
// for differnt type event in detial 
// must check mdn site

// An **EventListener** is a function in JavaScript that waits for a specific event to occur on a particular element, such as a button click, a key press, or a mouse hover. When that event happens, the function gets executed.

// JavaScript has a wide range of events for various actions like user input, form submissions, page load, and more. Below are different types of events with examples of how to use them in detail.

// ### Basic Syntax of `addEventListener`
// ```javascript
// element.addEventListener('event', function, useCapture);
// ```
// - **`element`**: The HTML element you're attaching the event to.
// - **`event`**: The type of event you're listening for (e.g., "click", "mouseover").
// - **`function`**: The function that gets executed when the event occurs.
// - **`useCapture`**: Optional boolean argument that indicates whether the event should be captured in the capturing phase (default is `false`, meaning it listens in the bubbling phase).

// ---

// ### 1. **Mouse Events**
// Mouse events occur when the user interacts with the mouse (clicks, moves, etc.).

// #### Common Mouse Events:
// - **`click`**: Fired when an element is clicked.
// - **`dblclick`**: Fired when an element is double-clicked.
// - **`mousedown`**: Fired when a mouse button is pressed.
// - **`mouseup`**: Fired when a mouse button is released.
// - **`mousemove`**: Fired when the mouse pointer moves over an element.
// - **`mouseover`**: Fired when the mouse pointer enters an element.
// - **`mouseout`**: Fired when the mouse pointer leaves an element.

// #### Example:
// ```javascript
// const button = document.getElementById('myButton');

// // Single click event
// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });

// // Mouse over event
// button.addEventListener('mouseover', () => {
//   console.log('Mouse hovered over the button!');
// });
// ```

// ---

// ### 2. **Keyboard Events**
// Keyboard events are triggered when the user interacts with the keyboard.

// #### Common Keyboard Events:
// - **`keydown`**: Fired when a key is pressed down.
// - **`keypress`**: Fired when a key is pressed down and produces a character.
// - **`keyup`**: Fired when a key is released.

// #### Example:
// ```javascript
// document.addEventListener('keydown', (event) => {
//   console.log(`Key pressed: ${event.key}`);
// });

// document.addEventListener('keyup', (event) => {
//   console.log(`Key released: ${event.key}`);
// });
// ```

// ---

// ### 3. **Form Events**
// Form events are triggered when interacting with form elements, such as input fields or buttons.

// #### Common Form Events:
// - **`submit`**: Fired when a form is submitted.
// - **`focus`**: Fired when an element gains focus.
// - **`blur`**: Fired when an element loses focus.
// - **`change`**: Fired when the value of an input element changes.
// - **`input`**: Fired when the user inputs text into an input element (works with `<input>`, `<textarea>`, etc.).

// #### Example:
// ```javascript
// const form = document.getElementById('myForm');

// // Form submission event
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent the form from submitting
//   console.log('Form submitted!');
// });

// // Input change event
// const inputField = document.getElementById('myInput');
// inputField.addEventListener('change', () => {
//   console.log('Input field value changed');
// });
// ```

// ---

// ### 4. **Window and Document Events**
// These events relate to the document and window itself, such as loading, resizing, or scrolling.

// #### Common Window/Document Events:
// - **`load`**: Fired when the window or an image has finished loading.
// - **`resize`**: Fired when the window is resized.
// - **`scroll`**: Fired when the user scrolls the document.
// - **`DOMContentLoaded`**: Fired when the HTML document has been completely loaded and parsed (without waiting for stylesheets, images, etc.).

// #### Example:
// ```javascript
// // Window load event
// window.addEventListener('load', () => {
//   console.log('Page has fully loaded!');
// });

// // Window resize event
// window.addEventListener('resize', () => {
//   console.log('Window resized to ' + window.innerWidth + 'x' + window.innerHeight);
// });

// // Document scroll event
// window.addEventListener('scroll', () => {
//   console.log('User is scrolling the page');
// });
// ```

// ---

// ### 5. **Clipboard Events**
// Clipboard events allow you to handle copy, cut, and paste operations.

// #### Common Clipboard Events:
// - **`copy`**: Fired when the user copies content.
// - **`cut`**: Fired when the user cuts content.
// - **`paste`**: Fired when the user pastes content.

// #### Example:
// ```javascript
// document.addEventListener('copy', () => {
//   console.log('Content copied to clipboard');
// });

// document.addEventListener('paste', (event) => {
//   console.log('Content pasted:', event.clipboardData.getData('text'));
// });
// ```

// ---

// ### 6. **Drag and Drop Events**
// These events allow handling drag-and-drop operations, which are common for interactive user interfaces.

// #### Common Drag Events:
// - **`dragstart`**: Fired when the user starts dragging an element.
// - **`dragover`**: Fired when a dragged element is over a drop target.
// - **`drop`**: Fired when a dragged element is dropped.
// - **`dragend`**: Fired when the user finishes dragging an element.

// #### Example:
// ```javascript
// const draggable = document.getElementById('draggable');
// const dropzone = document.getElementById('dropzone');

// // Drag start event
// draggable.addEventListener('dragstart', () => {
//   console.log('Drag started');
// });

// // Drag over event
// dropzone.addEventListener('dragover', (event) => {
//   event.preventDefault(); // Allow drop by preventing the default behavior
// });

// // Drop event
// dropzone.addEventListener('drop', () => {
//   console.log('Element dropped into dropzone');
// });
// ```

// ---

// ### 7. **Touch Events (Mobile/Tablet)**
// These events are triggered by touch devices such as smartphones or tablets.

// #### Common Touch Events:
// - **`touchstart`**: Fired when a finger touches the screen.
// - **`touchmove`**: Fired when a finger moves on the screen.
// - **`touchend`**: Fired when a finger is lifted from the screen.

// #### Example:
// ```javascript
// const touchArea = document.getElementById('touchArea');

// touchArea.addEventListener('touchstart', () => {
//   console.log('Screen touched');
// });

// touchArea.addEventListener('touchmove', () => {
//   console.log('Finger is moving on the screen');
// });

// touchArea.addEventListener('touchend', () => {
//   console.log('Touch ended');
// });
// ```

// ---

// ### 8. **Media Events**
// Media events are used for media elements like audio and video, such as when the media starts playing or is paused.

// #### Common Media Events:
// - **`play`**: Fired when the media starts playing.
// - **`pause`**: Fired when the media is paused.
// - **`ended`**: Fired when the media playback has finished.
// - **`volumechange`**: Fired when the volume is changed.

// #### Example:
// ```javascript
// const video = document.getElementById('myVideo');

// video.addEventListener('play', () => {
//   console.log('Video started playing');
// });

// video.addEventListener('pause', () => {
//   console.log('Video paused');
// });

// video.addEventListener('ended', () => {
//   console.log('Video finished playing');
// });
// ```

// ---

// ### Summary:
// - **Event listeners** make your web pages interactive by listening for specific actions and responding accordingly.
// - Each event type serves different user interactions such as clicking, typing, dragging, and more.
// - You can attach an event listener to any HTML element and trigger a function when that event occurs.

// By mastering event listeners, you can create dynamic and responsive web applications.
