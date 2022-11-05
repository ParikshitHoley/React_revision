
import {useEffect,useState,useRef} from "react";

export const Timer=()=>{
 const [timer,setTimer] = useState(0);
 const ref = useRef(null)
 console.log("mounted")
    useEffect(()=>{
        console.log("pavan")
        
        ref.current=setInterval(()=>{
           setTimer(pre=>pre+1)
           console.log(timer)
        },1000)

        return ()=>{
            clearInterval(ref.current)
            console.log("unmounted")
        }
      
    },[])


    return(
        <div>timer{timer}</div>
    )
}