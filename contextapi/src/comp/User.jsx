
import { useContext } from "react";
import { appcontext } from "./ContextApiComponent";
import {Link} from "react-router-dom"

export const User=()=>{
    const data = useContext(appcontext);
    
        return(
        <div>
          {data.map((ele,ind)=>{
            return (
                <div key={ele.id} style={{border: '1px solid black'}}>
               <Link to={`/user/${ele.id}`}>
               <p>{ele.brand}</p>
               </Link>
                </div>
            )
          })}
        </div>
    )
}