
import {useState,useEffect} from "react";
import {Product} from "../component/Product"
import { useSelector,useDispatch } from "react-redux";
import { STATUSES } from "../store/productSlice";
import {fetchProductThunk} from "../store/productSlice"
export const Home=()=>{
    
    const {product,status} = useSelector(store=>store.products)
    console.log(product,status)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProductThunk())
    },[])


    if(status===STATUSES.LOADING)
    {
        return (
            <h3 style ={{margin:"auto", marginTop :"100px"}}>Loading......</h3>
        )
    }

    if(status===STATUSES.ERROR)
    {
        return (
            <h3 style ={{margin:"auto", marginTop :"100px"}}>Something wents wrong......</h3>
        )
    }

    return(
        <div>
            <h4>products</h4>
            <div style={{display:"grid", gap:"20px" ,gridTemplateColumns:"repeat(4,2fr)" }}>
           {product.map(item=><Product key={item.id} item={item}/>)}

            </div>
        </div>
    )
}