// nested arrays (multi dimensional array  )
// array of arrays 
let nums = [[2, 3], [3, 4], [4, 8]];
console.log(nums);
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0][1]);
console.log(nums[0].length);


// lecture 25
// practice Qs
// create a nested array to show the follwing tic-tac-toe game state.
let arr =[]
for (let i = 0; i < 3; i++){
    let arr1 = [];
    for (let j = 0; j < 3; j++){
        if ((i + j )%2 == 0) {
            arr1.push("0");
        }
        else {
            arr1.push("x");
        }
    }
    arr.push(arr1);
}

console.log(arr);