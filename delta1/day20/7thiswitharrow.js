// This  keyword with Arrow function

// this keyword  in normal function scope calling obj
// this keyword  in arrow function lexical scope parant call scope

const student0 = {
    name: "atta",
    age: 23,
    pro: this // this in obj print window obj for pro mean global scope
}
console.log("window", student0.pro); // this reper the module.exprot so this emptyy


const student = {
  name: "atta",
  age: 23,
  eng: 78,
  math: 93,
  phy: 80,
    // for normal fuction this mean parent obj
  // this ==student
  getAvg() {
     console.log(this);
     return this.name;  // for normal function this is obj
  },
  // for arrow
  //this == window obj  b/c  student obj this is window obj
  
  getAvg1: () => {
      console.log(this); // parent scope for arrow function 
      return this.name;
  },
  
    getinfo1: function () {
        setTimeout(() => {
          console.log("fo1", this); //student
          //this look parent obj 
      }, 2000)
  },
    getinfo2: function () {
        setTimeout(function(){
          console.log("fo2", this); //window
          // the look callar obj 
          //setTimeout is the method of window 
      }, 2000)
  }
};

console.log("getavg");
// console.log(student.getAvg());

console.log("getavg1");
console.log(student.getAvg1());
console.log("gfo1");
console.log(student.getinfo1());
console.log(student.getinfo2());

console.log(setTimeout);



