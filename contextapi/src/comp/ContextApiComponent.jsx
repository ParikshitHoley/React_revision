import { findAllByAltText } from "@testing-library/react";
import {useState,useEffect} from "react";
import { createContext } from "react";
export const appcontext = createContext();


export const ContextApiComponent=({children})=>{
const [data,setData] = useState([]);

useEffect(()=>{
  find();
 
},[]);

const find=async()=>{
    fetch('https://dummyjson.com/products/').then((res)=>res.json()).then((e)=>setData(e.products));



}


    return(
           <div>
            <appcontext.Provider value={data}>
            {children}
            </appcontext.Provider>
           </div>
    )
}