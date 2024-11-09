// lecture 7 nested obj
// Object of Object
// storing infromation of multiple students 
const classinfo = {
    aman: {
        Grade: "A+",
        City : "Dir"
    },
    
    kamran: {
        Grade: "A+",
        City : "Dargai"
    },

    jawad: {
        Grade: "D",
        City : "swat"
    }

}

console.log(classinfo.aman.Grade);


// lecture 8
// Array of Object
// storing infromation of multiple student

const classarr = [
    {
    name : "aman", 
    Grade: "A+",
    City: "Dir",
  },

   { name : "karmarn",
    Grade: "A+",
    City: "Dargai",
  },

   { name : "jawand",
    Grade: "D",
    City: "swat",
  },
];

console.log(classarr[0].name);
console.log(classarr[1].Grade);
console.log(classarr[1].City);