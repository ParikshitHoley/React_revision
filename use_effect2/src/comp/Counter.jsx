
import React, {useState,useEffect,useRef} from 'react';

export const Counter=()=>{
    const [count,setCount] = useState(0);
    const Counter = useRef();
    // console.log(count);

    const find=()=>{
        Counter.current = setInterval(()=>{
            setCount((pre)=>pre+1);

        },1000);

        
    }
    useEffect(()=>{

        find();
       
        

        return ()=>{
            clearInterval(Counter.current);
        }

       

    },[])

    return (
        <div>
          Count : {count}
          <button onClick={find}>start</button>
          <button onClick={()=>{
            clearInterval(Counter.current);
          }}>pause</button>
          <button onClick={()=>{
            clearInterval(Counter.current);
            setCount(0);
          }}>reset</button>

        
          
         
        </div>
    )
    }