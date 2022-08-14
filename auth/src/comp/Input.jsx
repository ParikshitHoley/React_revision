import React ,{useState} from 'react';
import { nanoid }  from 'nanoid';
export const Input=(prop)=>
{
    const {Find} =prop;
    const [inpvalue,setValue] =useState("")

    const Take=(e)=>{
        setValue(e.target.value);
        

    }
    return(
        <div>
            <input type="text" value={inpvalue} onChange={Take}/>
            <button onClick={()=>{
                let obj={
                    id:nanoid(5),
                    title:inpvalue,
                    done:false,
                }
                Find(obj)

            }}>submit</button>

        </div>
    )


}