import axios from "axios";
import {useState,useEffect} from "react";
import {LOADING,GETDATA,SUCESS,ERROR} from "../Reducer"

export const User=({state,dispatch})=>{
    console.log(state)
     
    const [sort,setSort]=useState("");
    useEffect(()=>{
        dispatch({type : LOADING ,payload :"loading"})

        axios.get(`https://fakestoreapi.com/products`,{
            params:{
                sort:sort,
                
            }
        }).then((res)=>dispatch({type:GETDATA,payload:res.data})).then((res)=>dispatch({type:SUCESS,payload:"sucess"})).catch((err)=>dispatch({type:ERROR,payload:"error"}))
       

    },[sort])


    if(state.status=="loading"){
        return <h1>...loading</h1>
    }
    

    if(state.status=="error"){
        return <h1>...something wents wrong</h1>
    }




    return(
        <div><h4>products</h4>
        <button onClick={()=>{
            setSort("asc")
        }}>assending</button>
        <button onClick={()=>{
            setSort("desc")
        }}>desending</button>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
            { state.data.map((ele)=>{
                return (
                    <div key={ele.id}><img style={{width:"200px"}} src={ele.image} alt="img" />
                    <h3>{ele.title}</h3>
                    <h4>{ele.price} /-</h4>
                    </div>
                )
            })
            }</div></div>
    )
}