import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
export const Navbar=()=>{
    const count = useSelector(store=>store.cart)
    return (
        <div style={{display:"flex", gap : "30px" , justifyContent:"space-evenly"}}>
            <h4>logo</h4>
            <span style={{display:"flex", gap : "30px"}}>
            <section style={{display:"flex", gap : "30px", width:"400px"}}>
                <h4><Link to="/">Home</Link></h4>
                <h4><Link to="/cart">Card</Link></h4>
                <h4><Link to="/login">Login</Link></h4>
            </section>
            <h4>Items: <span>{count.length}</span></h4>
            </span>
            
        </div>
    )
}