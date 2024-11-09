// array method
// splice change in orignal array 
// splice : removes / replaces / add elements in place
// splice(start, deleteCount, item1 ...itemN)

let color = ["orange", "gree", "violet", "red", "yellow", "blue"];

let f1 = color.splice(4);
console.log(f1);
console.log(color);

let f2 = color.splice(1, 1, "imran", "javid");
console.log(f2);
console.log("color", color);

let f3 = color.splice(1, 3, "kamran", "navid", "fawad");
console.log("color",f3);
console.log(color);

let f4 = color.splice(-2);
console.log(f4);
console.log(color);



// lecture 20
// sort: sorts an array 
let days = ["monday", "mandys","sunday", "tuesday", "friday"];
days.sort();
console.log(days);

let marks = [3, 6, 2, 5, 3, 43];
// fist convert into string than sort 
// sort on the base of first digit from left
marks.sort();
console.log(marks);


// lecture 21 practice qs
// q for the given start state of an array, change it to final form using splice.
// start ; [ 'january' , 'july', 'march', 'august']
// final; [ 'july', 'june', 'march', 'august']


///Q 2 ; return the index of the "javaScript" from the given array, if it was reversed.
// [ 'c', 'c++', 'Html', "javaScript", 'python', 'java', 'c#', 'sql'];