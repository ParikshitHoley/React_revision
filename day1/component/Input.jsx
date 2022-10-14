
import { useState } from "react";
export const Input=({addtodo})=>{
    const [title,setTitle]=useState("")
    const changeTitle=(e)=>{
        setTitle(e.target.value)
    }
    console.log(title)
    return (
        <div>
            <input type="text" placeholder="enter todo" onChange={changeTitle}/>
            <button onClick={()=>{
                let obj={
                    title,
                    id :Math.random()*10,
                    status:false
                }
                addtodo(obj);
            }}>add todo</button>
        </div>
    )
}