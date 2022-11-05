import {useSelector,useDispatch} from "react-redux";
import { removeitem } from "../store/cartSlice";
export const Cart=()=>{
    const dispatch=useDispatch()
    const data = useSelector(store=>store.cart)
    const handleremove=(id)=>{
       dispatch(removeitem(id))
    }
    return(
        <div>
            <h4>cart</h4>
            <div>
               {data.map((ele)=>{
                return <div key={ele.id} style={{display:"flex", gap:"10px", justifyContent:"space-around", width:"50%", height:"auto"}}>
                    <img src={ele.image} style={{height:"50px"}} alt="img" />
                    <h4>{ele.price}<span>Rs /-</span></h4>
                    <button onClick={()=>{
                        handleremove(ele.id)
                    }}>Remove</button>
                </div>
               })}
            </div>
        </div>
    )
}