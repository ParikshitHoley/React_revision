
import { useEffect ,useState} from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import {useParams} from "react-router-dom";
import axios from "axios";
export const UserDetails=()=>{
const {id} = useParams();
const [data,setData] = useState({});
const [images,setImages]=useState([]);
console.log(data)
useEffect(()=>{
    find();
},[])

const find=async()=>{
    let net = await fetch(`https://dummyjson.com/products/${id}`);
    let resp = await net.json();
  
    setData(resp);
    setImages(resp.images);
    
   
  
}
    return(
        <div>
           
                <p>brand :{data.brand}</p>
                <p>category :{data.category}</p>
                <h3>price :{data.price} -/only</h3>

       
           

        </div>
    )
}