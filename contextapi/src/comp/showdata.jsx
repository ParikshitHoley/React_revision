import { useContext } from "react";
import { appContext } from "./contextapi";

export const Show=()=>{

    const data = useContext(appContext);
    return(
        <div>
            {data.map((ele)=>{
                return(
                    <div key={ele.id} style={{border:"1px solid #ccc"}}>
                        <p>name : {ele.name}</p>
                        <p>user : {ele.username}</p>
                        <p>email {ele.email}</p>
                        <button>watch details</button>
                    </div>
                )
            })}


        </div>
    )
}