import { useState } from "react"


export default function LudeBord() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

    let [count, setCount] = useState(0);

    let UpdateBlue = () => {
        // moves.blue += 1; // best way to write in as follwing 
        console.log(`moves =${moves.blue}`);
        
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }
        })
    }; // this use to detect in change in obj
        
        
    let UpdateYellow = () => {
        // moves.blue += 1; // best way to write in as follwing 
        console.log(`moves =${moves.yellow}`);
        
        setMoves((prevMoves) => {
          return  { ...prevMoves, yellow: prevMoves.yellow + 1 }
}); // this use to detect in change in obj 
    }


    return (
      <>
        <p>ludoGame</p>
        <div className="board">
          <p> Blue moves ={moves.blue} </p>
          <button style={{ backgroundColor: "blue" }} onClick={UpdateBlue}> +1 </button>
          <p> Yellow moves = {moves.yellow} </p>
          <button style={{ backgroundColor: "yellow" }} onClick={UpdateYellow}> +1 </button>
          <p> Green moves = {moves.green} </p>
          <button style={{ backgroundColor: "green" }}> +1 </button>
          <p> Red moves = {moves.red} </p>
          <button style={{ backgroundColor: "red" }}> +1 </button>
        </div>
      </>
    );
}