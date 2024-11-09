let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomcolor = getRandomColor();
    h3.innerText = randomcolor;
    // console.log("color change");
    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;

});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    // console.log("hi");
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


//lecture 5 
// it mean porpuse eventlistner use for all other event no specific for button click (mean use for para heading etc )
