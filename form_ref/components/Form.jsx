import {useState,useRef} from "react";
export const Form=()=>{
    const [data,setData] =useState({});
     const refred = useRef(null);
    const inputHandler=(e)=>{
        e.preventDefault();
        const {placeholder,value}= e.target;
        setData({...data,[placeholder] : value})
    }

    const d = useRef(null)
    console.log(d)
  const HandlerSubmit=(e)=>{
        e.preventDefault();
        console.log("masai")
         fetch("http://localhost:8080/form",{
            method : "POST",
            headers: {
                "content-type" : "application/json"},
                body: JSON.stringify(data)
         }).then((res)=>d.current=res)
         
    
    
  }
 
    
    

    return (
        <div>
            <div>  <form onSubmit={HandlerSubmit}>
            <input type="text" placeholder="name" onChange={inputHandler}/><br />
            <input type="password" placeholder="password" onChange={inputHandler}/><br />
            <input type="number" placeholder="age" onChange={inputHandler}/><><br />
            <input type="email" placeholder="email" onChange={inputHandler}/></><br />
            <input type="submit" /><br />
        </form></div>
            <div>
                <div ref={refred} style={{width:"100%", height:"300px" ,backgroundColor :"red"}}></div>
                <div style={{width:"100%", height:"300px" ,backgroundColor :"green"}}></div>
                <div style={{width:"100%", height:"300px" ,backgroundColor :"yellow"}}></div>
                <div style={{width:"100%", height:"300px" ,backgroundColor :"teal"}}></div>
                <div style={{width:"100%", height:"300px" ,backgroundColor :"black"}}></div>
            </div>
            <button onClick={()=>{
                
                refred.current.scrollIntoView({behavior:"smooth"});
               
            }} style={{padding : "20px 30px"}}>scroll</button>
        </div>
      
    )
}