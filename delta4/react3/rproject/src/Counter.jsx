import { useState } from "react"

export default function Counter() {
    // lec 4
    // this code not wrok to change in UI 
    // let count = 0;

    // function incCount() {
    //     count += 1;
    //     console.log(count);
    // }
    
    

    
    
    
    // lec 6 
    // let arr = useState(0);
    // console.log(arr);
    // re-construct the arr
    // let [stateVariable, setStateVariable] = useState(2); 

    // pass init value
    
     let [count, setCount] = useState(0);
    

    let incCount = () =>{
        setCount(count+1);
      console.log(count);
    }
    
    return (
        <>
            <h3>Count = { count}</h3>
            <button onClick={incCount}>increase Count </button>
        </>
    )
}


