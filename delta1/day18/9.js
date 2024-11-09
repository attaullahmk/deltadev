// lecture 9
// Math object : is collection of math property and method
// Properties
// Math.PI
// Math.E

// methods
// Math.abs(n);
// Math.pow(a, b);
// Math.floor(n);
// Math.ceil(n);
// Math.random();

console.log(Math.PI);             // Output: 3.141592653589793
console.log(Math.abs(-5));         // Output: 5
console.log(Math.floor(4.9));      // Output: 4
console.log(Math.ceil(4.1));       // Output: 5
console.log(Math.random());        // Output: A random number between 0 and 1
console.log(Math.max(1, 5, 10));   // Output: 10
console.log(Math.pow(2, 3));       // Output: 8 (2^3)
console.log(Math.sqrt(16));        // Output: 4

console.log("hi hhh");
console.log(Math);
console.dir(Math);

// this in browser work properly 👇

// The Math object is non-enumerable and static, which is why console.log(Math) or console.dir(Math) won’t display its methods or constants.
// To see its properties, you can access them individually (Math.PI, Math.random(), etc.) or list them using Object.getOwnPropertyNames(Math).
console.log(Object.getOwnPropertyNames(Math)); // that work





// Non-enumerable ? // must search

// properties of an object can be either enumerable or non-enumerable. Enumerable properties are those that can be iterated over, for example, using loops like for...in or functions like Object.keys() and JSON.stringify(). Non-enumerable properties, on the other hand, are not included in such iterations.
const obj = { name: 'Alice' };

// Add a non-enumerable property
Object.defineProperty(obj, 'age', {
  value: 25,
  enumerable: false
});
console.log(Object.keys(obj)); // ["name"]
console.log(obj.age);          // 25

console.log(obj.propertyIsEnumerable('name')); // true
console.log(obj.propertyIsEnumerable('age'));  // false















// / Math.abs(n);
// abslute method 
let abs = Math.abs(-35);

console.log(abs);

let pow = Math.pow(2, 4);
console.log(pow);

//round to zameen mean low number round
// round to smallest integer value
let floor = Math.floor(3.9);
// incase of muinse 
let floorM = Math.floor(-34.5); // -35
console.log(floor);
console.log(floorM);


// ceiling (chat)
// round to largest integer value 
let cell = Math.ceil(4.8); //5
console.log(cell);




// Math.random() give value 0 to 1 range not 1 include

// let random = Math.random();
// let value =  random * 7;
// let int = Math.floor(value);
// console.log(random);
// console.log(value);
// console.log(int);




// lecture 10
// Random integer 
// sample 