import { useParams ,Link} from "react-router-dom"
import {useState,useEffect} from "react";
export const UserDetails=()=>{

    const {id} = useParams();
    const [data,setData] = useState([]);

    const getdata=async()=>{
        let reply = await fetch(`https://reqres.in/api/users/${id}`);
        let res = await reply.json();
        setData(res.data);
    }
    useEffect(()=>{
        getdata();

    },[])

    
    console.log(data)
    return (
        <div>
            <img src={data.avatar} alt="avtar" />
            <p>email : {data.email}</p>
            <Link to="/user"><button>go back</button></Link>
            
        </div>
    )
}