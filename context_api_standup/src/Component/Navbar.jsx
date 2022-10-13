import { useContext } from "react";
import { IncrementContext } from "./Contextapi";
import {Link} from "react-router-dom"
import {usePrams} from "react-router-dom";

export const Navbar=()=>{
const {count} = useContext(IncrementContext);

// const arr = [{to : "/about" , tilte : "about"}]

    return (
        <div style={{width : "100vw" , height : "30px"  , backgroundColor : "yellow" , justifyContent: "space-around" , display : "flex"}}>
         <div >count : {count}</div>

        <Link to="/about"><button>about</button></Link>
        <Link to="/home"><button>home</button></Link>
        <Link to="/contact">
            <button>contact</button>
        </Link>
        <Link to="/user"><button>users</button></Link>
        
        
        </div>
        
    )
}