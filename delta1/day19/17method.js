// Methods
// methods is Actions that can be performad on an Object.
// in obj varible is key value piar while function is called method it mean function in obj is called method


const calculate = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  //nameless function
  mul: function (a, b) {
    return a * b;
  }
};

console.log(calculate.add(3, 4));
console.log(calculate.sub(3, 4));
console.log(calculate.mul(3, 4));


// method (shorthand)
// no need to write function key word 
const calculat = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  }
};
console.log(calculat.add(3, 4));
console.log(calculat.sub(3, 4));
console.log(calculat.mul(3, 4));


// the method of string and array internally store in obj method form

let a = [2, 3, 4].pop(); // array interally  obj which use pop push method
// console.log(a);
