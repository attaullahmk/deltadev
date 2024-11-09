// lecture 5
// Factory Function
// A function that create(return) Objects

// this not use just for understanding .. why use calss ...

// this is name fectory function no such property etc

// better way than individual obj create for every obj
function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(` Hi , my name is ${this.name}`);
        },
    };
    return person;
}


// let p1 = personMaker("atta ullah", 23); // copy
// let p2 = personMaker("mk", 22); //copy
// console.log(p1 === p2);  // two different copy ocupy more space not more effecient than oops
// console.log(p1);
// let a = p1.talk()
// let b = p2.talk()
// console.log(a === b); // two deferent copy even talk function is comman for both(create onece )
// console.log(p1.talk());







// lecture 06

// New Operator
// the new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.


//Constructors  - doesn't return anything and start with capital character( you retrun and small letter but developer rule do not it)

// constructors
function Person(name, age) {
    this.name = name;
    this.age = age;
    // console.log(this);// without new keyword this print
}
// console.log(this); // the print window obj in browser if not use new keyword


// to creat talk function
Person.prototype.talk = function () {
    console.log(`Hi , my name is ${this.name}`);
}

// this also achive above way  but this one is better than above
// if create new instance the access prototype function as talk
let p1 = new Person("adnan", 25);
// let p3 = new Person("adnan", 25);
let p2 = new Person("kamra", 22);
console.log(p1);

console.log(p1.talk() === p2.talk()); //true b/c both are prototype properties not individual property p1 and p2



// work same but more best waye





// lecture 7
// Classes
// classes are a template for creating Object

// The constructor method is a special method of a class for creating and initializing an object instance of that class.



//internal implimantation of consturctor is implimanate using above method

// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // both write in class not as above separate
//     talk() {
//         console.log(`Hi , my name is ${this.name}`);
//     }
// }

// let p1 = new Person("ahmad", 25);
// let p2 = new Person("kamran", 23);

// console.log(p1);
// console.log(p1.talk());



// lecture 8
// Inheritance
// inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

// class Student extends Person {
//     constructor(name, age, marks) {
//         super(name, age); // parent class constructor is being called
//         this.marks = marks;
//     }
//     great() {
//         return "hello!";
//     }
// }

// if  define same name function in child class the print the chilid class method not the parent class method so override the parenet method
// let s1 = new Student("karman", 25, 95);
// console.log(s1);
// console.log(s1.great());