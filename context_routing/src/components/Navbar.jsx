import {Routes,Route,Link} from "react-router-dom";


export const Navbar=()=>{
    return (
        <div style={{display:"flex", gap:"2rem", justifyContent:"space-around", border :"1px solid red"}}>
           <Link to="/">home</Link>
           <Link to="/login">login</Link>
           <Link to="/user">user</Link>
        </div>
    )
}