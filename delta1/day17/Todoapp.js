// Todo app
// list - to show all todos
// add - to add a todo
// delete - to delete a task
// quit - to exit the todo

// this vedio no sound so check the google drive vedios








// In JavaScript, **`for...in`** and **`for...of`** loops are used to iterate over data, but they are used for different types of objects and serve different purposes.

// ### 1. **`for...in` loop**
// - **Purpose**: Iterates over the **keys (property names)** of an object or array.
// - **Use case**: Best used for **objects** but can also be used for arrays (though not recommended for arrays).

// #### Example with an Object:
// ```js
// let person = { name: "John", age: 30 };

// for (let key in person) {
//   console.log(key); // Output: name, age
//   console.log(person[key]); // Output: John, 30
// }
// ```

// #### Example with an Array (not recommended):
// ```js
// let arr = [10, 20, 30];

// for (let index in arr) {
//   console.log(index); // Output: 0, 1, 2 (array indices)
//   console.log(arr[index]); // Output: 10, 20, 30
// }
// ```
// - **In arrays**, `for...in` loops over the **indexes**, not the actual values.

// ---

// ### 2. **`for...of` loop**
// - **Purpose**: Iterates over the **values** of an iterable object (e.g., arrays, strings, sets, maps, etc.).
// - **Use case**: Best for **iterating over arrays, strings, and other iterable objects** like sets or maps.

// #### Example with an Array:
// ```js
// let arr = [10, 20, 30];

// for (let value of arr) {
//   console.log(value); // Output: 10, 20, 30
// }
// ```

// #### Example with a String:
// ```js
// let str = "hello";

// for (let char of str) {
//   console.log(char); // Output: h, e, l, l, o
// }
// ```

// #### Example with a Set:
// ```js
// let set = new Set([1, 2, 3]);

// for (let value of set) {
//   console.log(value); // Output: 1, 2, 3
// }
// ```

// ---

// ### Key Differences:
// - **`for...in`**: Loops over **keys** (for objects) or **indexes** (for arrays).
// - **`for...of`**: Loops over **values** of **iterable** objects like arrays, strings, sets, and maps.

// ### Summary:
// - Use `**for...in**` to loop over object **properties** (keys).
// - Use `**for...of**` to loop over the **values** of an iterable (like arrays, strings, sets, etc.).