// Destruturing 
// Object
const student = {
    name1: "karan",
    class: 9,
    age: 14,
    subject: ["eng", "phy", "math", "science", "social studies"],
    username: "karan123",
    password: 12345,
    city: "peshaware"

};


// // 1 way not a best way for large data
// let username = student.username;
// let password = student.password;



// 2 waye
// the variable name must match with obj key if not same give undefine 
const { username, password ,name1} = student;
console.log(username);
console.log(password);
console.log(name1);


// or

// city  is defult key values
// if change key value with variable name if assign to a varibal than variable name use not key value  as now use user not useraname 
// const { username: user, password: pass} = student;



const { username: user, password: pass  , city = "islamabad "} = student;
console.log(user); //karan123
console.log(city); // if obj have key value use that value.. not the defult value as print peshawar not islamabad


// solve qustion in pdf in lectures 
