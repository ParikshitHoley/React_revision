import { useDispatch } from "react-redux";
import { additem } from "../store/cartSlice";
export const Product=({item})=>{
    const {image,price,title} = item;
    const dispatch = useDispatch();
    const handleadd=(item)=>{
         dispatch(additem(item))
    }
return(
   <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"10px", width:"100%" , height:"400px"}}>
    <img style={{width:"70%", height:"50%", marginTop:"20px"}} src={image} alt="image" />
    <h5>{title}</h5>
    <h5>{price} <span>Rs/-</span></h5>
    <button onClick={()=>{
        handleadd(item)
    }}>add to cart</button>
   </div>
)
}