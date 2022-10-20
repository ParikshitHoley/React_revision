import { useContext } from "react";
import { AuthContext } from "../context/Auth_context";

export const  User=()=>{
    const {state,handleauthChange} = useContext(AuthContext)
    const {token,auth} = state
    return(
        <div>
          {auth ? <h1>{token}</h1> : <h1>not login</h1>}
        </div>
    )
}