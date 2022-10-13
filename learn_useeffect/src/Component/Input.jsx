import {useState} from "react";


export const Input=({done,HandleDone})=>{
    const [text,setText] =useState("")

    const Handlechange=(e)=>{
        //console.log(e.target.value);
        setText(e.target.value);
    }

    const HandleAdd=()=>
    {

        let payload={
            task : text,
            status : false
        }

       fetch(`http://localhost:8080/users`,{
        method : "POST",
        headers : { "Content-Type" : 'application/json' },
        body :JSON.stringify(payload)

       })

       //setText("");
       HandleDone();
    }
    

    return(
        <div>
            <input type="text" onChange={Handlechange} />
            <button onClick={HandleAdd}>add data</button>
            
        </div>
    )
}