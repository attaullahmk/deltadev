// write  a fuction that prints "helow" 5 times at intervals of 2s each.
let id = setInterval(() => {
    console.log("hello word");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);