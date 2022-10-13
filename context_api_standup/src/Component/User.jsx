
import React , {useState,useEffect} from "react";
import {Link} from "react-router-dom";
export const User=()=>{

    const [data,setData] = useState([]);

    const getdata=async()=>{
        let reply = await fetch(`https://reqres.in/api/users`);
        let res = await reply.json();
        setData(res.data);
    }
    useEffect(()=>{
        getdata();

    },[])
    

    return (
        <div style={{justifyContent:"space-between" , display:"flex" , flexDirection : "column-reverse"}}>
            {data.map((ele)=>{
                return (
                    <Link key={ele.id} to={`/user/${ele.id}`}>{ele.first_name}</Link>
                )
                
            })}
        
        </div>
    )
}

// context-api 
// routing
// useeffect , conditional rendering