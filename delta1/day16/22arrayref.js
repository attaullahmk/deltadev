// array References( address in memory)
let a = "name" == "name"; //ture 
console.log(a);
let b = "name" === "name"; //ture
console.log(b);
let d = [1];
let c = [1];
console.log(d == c); //false
console.log(d === c);// false
//if compare array in which address compare not the values compare .. it array store reference not value array store only it adress


let f = [];
let g = [];
console.log( "line",g == f);
// all of these due to the array refrence
// the name of arry called reference variable





// intersting point 
let arr = ['a', 'b'];
console.log(arr);
let arrCopy = arr;
console.log(arrCopy);
arrCopy.push('c');
// arr.pop();
console.log(arrCopy);
console.log(arr); // now if one change other also change
// addres mean refrence in programing 
console.log(arr == arrCopy);
console.log(arr === arrCopy);



// lecture 23
// constant arrays
// as normal variable onece variable decalare the can not change 
const z = 23;
console.log(z);
const arrc = [1, 2, 3, 4]; // cosnt array you can add and push value but you can not assigned new array or complete new element array point address not  value
// arrc = [3, 4, 6]; it will give error
console.log(arrc);
console.log(arrc);
arrc.push(23);
console.log(arrc);