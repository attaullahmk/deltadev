//lecture 1 
// this keyword in js ? 
// this keyword
// "this " keyword refers to an object that is executing the current piece of code.

const student = {
    name: "atta",
    age: 23,
    eng: 78,
    math: 93,
    phy: 80,
    getAvg() {
        // if this key word not use than give undefine
        // method not directly access to obj element
        // if use the element of object  in method than this keyword with element of an object
        //this refer to the current  obj in which method define
        console.log(this); // that will print all object 
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

// if seclect line and execute in vs code only that will print intersting  // out of topic 

console.log(student.getAvg());

console.log("this value", this); // empty obj if print in fucn tham print window or global obj node

//Summary
// Top-Level in Node.js: this refers to module.exports.👉 1.1.js
// Inside Regular Functions (Non-Strict Mode): this refers to the global object (global).
// Strict Mode: In strict mode, this is undefined in non-method functions


// if you try to use this keyword of object out of obj than print window obj

function getValue() {
    console.log(this.alert);
    console.dir(this.alert);
    console.log(this); // this of this refer to the window obj 
    // console.log(window);
}

console.log(getValue()); // in browser that print window obj while in node it print global obj

// higher level object in tab is window object



console.warn("this is wrong");
console.error("this show error");
// console method ? 