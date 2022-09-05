import {useState} from "react";

export default function PlayPause(){
  const [done,setDone]=useState("false")
 const Handler=()=>
 {
   setDone(!done)
 }
  return (
    <div>
      <h1>{done? "The state is paused" : "The state is playing"}</h1>
      <button onClick={Handler}>{done? "Paused" : "Playing"}</button>
    </div>
  );
}; // Write Code here
