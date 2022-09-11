import {useState,useEffect} from "react";

export const Show=()=>{

const [data,setData] = useState([]);

useEffect(()=>{
    getData();

    
},[])

console.log(data)


const getData=async()=>{
    let data1 = await fetch("http://localhost:8080/todolist");
    let res = await data1.json();
    setData(res);
}


    return(
        <div>
         {data.map(({task,date,status,id})=>
        
             <div key={id}>
               <p>task : {task}</p> 
               <p>data : {date}</p>
               <p>status : {status}</p>

             </div>
         )
         }
        </div>
    )
}