
import { useState,useEffect} from "react";
import axios from "axios";
import { createContext} from "react"
export const appContext = createContext();




export const ContextapiComponent = ({children})=>{
    const [data,setData]=useState([]);

    async function find()
    {
        let data1 = await axios.get(`http://jsonplaceholder.typicode.com/users`);
        let net = data1.data;
        setData(net);
    }
   useEffect(()=>{
    find();
   },[])

    return(
        <div>
            <appContext.Provider value={data} >
            {children}
            </appContext.Provider>
        </div>
    )
}