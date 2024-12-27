import { useState } from "react";

export default function LikeButton() {
    // let clicked = () => {
    //     console.log("cliked");
        
    // }


    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);        
    }
    let likeStyle = { color : "blue"}

    return (
      <>
        <p>like button </p>
        {/* <p onClick={clicked}>
          <i className="fa-regular fa-heart"></i>{" "}
        </p> */}

        <p onClick={toggleLike}>
          {isLiked ? (
            <i className="fa-solid fa-heart" style={likeStyle}></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </p>
      </>
    );
    
}