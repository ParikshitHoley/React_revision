import {useRef} from "react";

export const Ref=()=>{
    const buttonref = useRef(null) 
    


    return(
        <div>
            <div ref={buttonref} style={{width :"200px" , height :"300px", backgroundColor : "red"}}></div>
            <div style={{width :"200px" , height :"300px", backgroundColor : "green"}}></div>
            <div style={{width :"200px" , height :"300px", backgroundColor : "yellow"}}></div>
            <div style={{width :"200px" , height :"300px", backgroundColor : "blue"}}></div>
            <div style={{width :"200px" , height :"300px", backgroundColor : "orange"}}></div>
            <div style={{width :"200px" , height :"300px", backgroundColor : "black"}}></div>

            <button style={{width:"30px", height : "50px"}}  onClick={()=>{
                buttonref.current.scrollIntoView({behavior: "smooth"});
            }}>scroll</button>
        </div>
    )


}