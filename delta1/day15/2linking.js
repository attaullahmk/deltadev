// how to link js with html



// Chapter 3 practice set 
let marks ={
    harry : 23,
    javad : 34,
    ikram : 56,
    sohil : 76
}
let b = Object.keys(marks); // it will give array of keys 
console.log(typeof b); // obj
// console.log(marks["harry"])
// print the key and value of obj using  for loop 
for(let i=0; i<Object.keys(marks).length; i++){
    console.log(" the marks of ", Object.keys(marks)[i], "are", marks[Object.keys(marks)[i]]);
    
}
console.log(Object.keys(marks)); // the will print all the key of obj 
// if want to acces specific than use the index to access 


// this my practice 
let a =3;


console.log(Object.keys(marks)[a])
console.log(marks["harry"])

// problem 2 
// this beuty of new javascript

for(let i in marks){
    // console.log(i);
    console.log(" the marks of ", i, "are", marks[i])
}