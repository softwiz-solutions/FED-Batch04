"use client";

import { useState } from "react";

export default function Likes() {
  const [likes, setLikes] = useState(0);
  // const [password,setPassword]=useState(0)

  // let likes = 0;
  function handleClick() {
    //  likes++  *> likes=likes+1
    //  likes+1 -> 0+1=1 , 1+1=2, 2+1=3
    setLikes(likes + 1); // likes=1
    // setPassword(123) // password=123
    console.log("likes in function", likes);
    console.log("Button Clickedfsdfsdfdafd!");
  }
  console.log("likes in root", likes);
  return <button onClick={handleClick}>Likes {likes}</button>;
}
