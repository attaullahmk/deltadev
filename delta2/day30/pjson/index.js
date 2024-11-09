var figlet = require("figlet");

figlet("eid mubrak", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  // console.log("data"); // it treat is normal data 
});
// import colors from 'color-name';
// let color = colors.red //[255,0,0]
// // console.log(color);
// const colors = require("colors");

// console.log("Hello, GeeksforGeeks Learner".red);
// console.log("Hello, GeeksforGeeks Learner".bgMagenta);
// console.log("Hello, GeeksforGeeks Learner".bgYellow.blue);

// const colors = require('color-name');
// let color = colors.red; //[255,0,0]
// console.log(color); // [255, 0, 0]

(async () => {
  const colors = await import("color-name");
  let color = colors.default.red; //[255,0,0]
  console.log(color); // [255, 0, 0]
})();
