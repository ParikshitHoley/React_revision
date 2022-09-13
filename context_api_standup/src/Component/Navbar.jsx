import { useContext } from "react";
import { IncrementContext } from "./Contextapi";

export const Navbar=()=>{
const {count} = useContext(IncrementContext);


    return (
        <div style={{width : "100vw" , height : "30px"  , backgroundColor : "yellow"}}>count : {count}</div>
    )
}