import { useContext } from "react";
import { IncrementContext } from "./Contextapi";

export const Product=()=>{
    const {HandleChange} = useContext(IncrementContext);
    return (
        <div style={{width : "200px" , height : "200px" , backgroundColor  : "pink" , border : "1px solid red"}}>
            <button onClick={()=>{
             HandleChange(1)
            }}>add</button>
        </div>
    )
}