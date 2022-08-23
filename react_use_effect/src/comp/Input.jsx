import React, {useEffect,useState} from "react";
import {Show} from "./Show"
export const Input=()=>{

    const [auth,setAuth] = useState(true)
    const[text,setText] =useState("");
    const[money,setMoney]=useState(null)
    const[send,setSend]=useState(true);
    const find=()=>{
        let payload={
            name : text,
            money : money,
        }
        
        fetch("http://localhost:4500/users",{
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body : JSON.stringify(payload),


        }).then(()=>setSend(!send));
        console.log(send)


    }

    return(
        <div>
            <input type="text" onChange={(e)=>{
                setText(e.target.value);
            }} />
            <input type="number" onChange={(e)=>{
                setMoney(e.target.value);
            }} />

            <button onClick={find}>submit</button>

            {auth? <Show ans={send}/> : null}
    <button onClick={()=>{
      setAuth(!auth)
    }}>toggle</button>

        </div>
    )
}