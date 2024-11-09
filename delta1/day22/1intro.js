// DOM  the DOM represent a document with a logical tree.
// it allows us to manipulate / change webpage content (html elemtnts).






// leacture 2
//window obj is higher order obj in tab
// write in console window
// window object is enbuld in browser which atoumatically genrate
// document is also the object of window object
// document Object store all related document with html and css -> change html and css from this point USING  js in page

//every element is called node -> body h1 p etc -> every node is obj in js which have some property and method

// when write console.log(document) the print all html and css
// to print document Object use the follwing method
// console.dir(document) // print document as a object it mean show all the property and method related to the doucument obj








// leacture 3
// if you go to all in document show all the tag you use in the webpage
// console.dir(document.all);

// to change in the text in html

// console.dir(document.all[6].innerText= "hi")
// google -> collection vs array  in js



// lecture 4
//   downlod code




// lecture 5

// selecting Elements
// getElementById
// return the Element as an object(have different property the change to do with js ) or null (if not found)

// to acess the the Element using id
// if you try using console the will print
document.getElementById("khan");
// the will give Object it can store in other variable to do some opration
// v v imortant
//print method and property of this obj and explore in detail
// let obj = document.getElementById("khan");
// obj.style.color = "green";
// obj.src = " other source of image" // as we can do some opration
// if you want to print obj use the dir function
// if you access obj using id which not exist the will give null





// lecture 6
// Selecting Element by getElenmentByClassName
// return the Element as an HTML collection or empty collection (if not found)
// getElementByClassName
// document.getElementsByClassName("helo")[2];
// it will be itrate using indexing
// if you want to itrate the element of an element with className selecter than you selecte the element using class name selcter same as array but pop push as method not work
// if you want print using classname so if wrong so the give html collection zero lenght



// array vs html collection ?
//Iterability: HTMLCollection is not directly iterable using forEach(). However, you can use a for loop or convert it to an array to use array methods.
// Converting HTMLCollection to Array:
let divs = document.getElementsByTagName("div");
let divArray = Array.from(divs); // Convert HTMLCollection to Array
divArray.forEach((div) => console.log(div));







// lecture 7
// selection Element
// getElements
// getElementByTagName
// return the element as an HTML collection or empty collection (if not found )
// let a = document.getElementsByTagName("h1");
// this also use index for specific
// let a = document.getElementsByTagName("h1")[0].innerText = " i am khan ..";
// console.log(a);

// collection not all select so use for loop to do some opretion on it
// let a = document.getElementsByTagName("h1");

// for (let i = 0; i < a.length; i++){
//     a[i].innerText = " i am khan ..";
// }
// best way use for of loop for collection 
// for (a of a) {
//     a.style.color = "green";
// }

// let p = document.getElementsByTagName("p");
// p[2].style.color = "red";








// lecture 8
// Query Selectors
// allows us to use any CSS selector as psodu secltor also use 
// use for only one selcte
// this will use most important
// console.dir(document.querySelector("h1"));
document.querySelector("div p"); // this also possible 
document.querySelector('p'); // selects first p element
document.querySelector('#myId'); // selects first Id = myId
document.querySelector('myClass'); // selects first  class = myClass
// querySelector use for single element to select which first match in document


// not selecte the all element quryslector
// as above
// so use the follwing
// document.querySelectorAll("p") // select all the p element
// it return in html collection










// leacture 9
// setting content in Objects
// using Properties and Methods
// innerText properties
// showes the visible text contained in a page  //treat as text
// innerText take content from web page
// if make display none than not selcet the text wich display none 

// textContent
// showes all the full text ///as if hidin property no show in innertext while show in textcontent
// textContent take text from file which write html code
// the show all the content write in html file

// innerHTML
// shows the full markup  //innerHTML treat as a html

// all the above property print for the paragraph
let para = document.querySelector('p');
// console.log(para);
// let a = para.innerHTML
// console.log(a);
// let b = para.innerText;
// console.log(b);
// let c = para.textContent;
// console.log(c);
// these two show the content
// para.innerText = "abc abc <b> khan </b>";
// para.textContent = " abc <b> khan </b>";
// // but these show the tag proper
// para.innerHTML = "abc <b> khan </b>";








// 10 leacture
// manipulating Attributes (getter and setter)
// Obj.getAttribute(attr)
// Obj.setAttribute(atrr, val) chanage existing value
// getters and setter
// let id = document.querySelector("h1");
// let d =id.getAttribute("id"); //print attribue of element
// console.log(d); // khan
// now change khan to jan
// id.setAttribute("id", "jan"); //change blue to red
//setattribute have one value it a time not apply mutiple class






// lecture 11
// manipulating style
// style property
//change css name(hypen) to camalcase
// Obj.style
// use only inline css to acsess not acess other css as internal or external using js
// g = document.querySelector("#love").style.background = "brown";
// g = document.querySelector("#love").style;
// console.log(g);
// g.color = "green";  
// let hi = document.querySelector('#h1');
// // console.log(hi);
// hi.style.color = "red";
// hi.style.background = "green";








// leacture 12
// Manipulating Style
// using classList
// Obj.classList
// let id = document.querySelector("h1");
// console.log(id);
// console.log(id.classList); //to check the number of class

// if add new class propety if class is already define
// in css
// Object.classList.add(); // to add new class but class is already define in css .. add multiple classes
// id.classList.add("gee", "man");
// Object.setAttribute('class', 'cls2'); only one attribute to apply to setAttribute so use classlist to apply multiple class in once
// id.setAttribute('class', 'gee');


// Object.classList.remove(); // to remove classes
// id.classList.remove("gee");

// Object.classList.cantains( "khan");
// to check if class exists (false or true)

// Object.classList.toggle(); // to toggle between add and remove ...use as switch if calss exist to remove if not to add class
// id.classList.toggle("gee");





// 13
// google=?
// navigation

// parantElement
// let parnt = document.querySelector('#bold');
// console.log(parnt.parentElement);
// // children
// console.log(parnt.children);
// // childElementCount
// console.log(parnt.childElementCount);
// // previousElemetSibling / nextElementSibling
// console.log(parnt.previousElementSibling);







// leacture 14
// Adding Elements 
// document.createElement('p');
let newP = document.createElement("h1");

newP.innerText = "hi new para";
// this was create but not show anywhare in html so use the follwing method 
let div = document.querySelector('p');
// div.appendChild(newP);
// append mean add to last

let btn = document.createElement('button');
btn.innerText = "click me ";
// div.appendChild(btn);



// append(Element); // string /text 
// add in last 
newP.append("   ...new text to add in newp");
newP.append(btn);
newP.append("   ...new text to add in newp");

// prepend(Element);
// add into begin

// div.prepend(newP); // all move to start




// insertAdjacentElement(whare, Element);

// add to exit position which you want to add

let newH3 = document.createElement('h3');

newH3.innerHTML=("add new h3 heading add to the page ");

let h = document.querySelector('h2');

h.insertAdjacentElement('beforebegin', newH3);





// leacture 15
// Removing Elements

// removeChild(Element);
// remove(Element);
// h.remove(); // to remove h2 element
// let body = document.querySelector("body");
// body.remove();

// 16 practice Qs 
let para3 = document.createElement("h4");
para3.innerText = "hi and Welcome";
let bod = document.querySelector("body");
bod.append(para3);
para3.style.color = "red";
// also use class method add class that define in css sheet 
// para3.classList.add("gee", 'man');