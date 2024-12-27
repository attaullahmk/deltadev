// lec 1 
function printHello() {
    console.log("hello to every one ");
}

// lec 2
function handleMouseOver() {
    console.log("Goodby");
    
}

function handleDblClick() {
    console.log("dblclick");
    
    
}


// lec 3
function handleFormSubmit(event) {
    event.preventDefault();
    //event have multiple properties one of them is preventDefault use to prevent form from intance hide when form is submit
    console.log("form was submitted");
}



export default function Button() {
    return (
        <div>
            <button onClick={printHello}>click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam recusandae qui amet vitae accusantium iure asperiores ratione magni enim nulla vel cupiditate iusto reiciendis esse veniam quia possimus, dolor earum facilis. Atque, deleniti ad!</p>
            <button onDoubleClick={handleDblClick}>dbclick</button>

            <form onSubmit={handleFormSubmit}>
                <button>submit</button>
            </form>


        </div>    
   ) 
}