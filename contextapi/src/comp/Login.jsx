import { Auth } from "./Authcontext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const navigate = useNavigate();
    const {HandleAuth} = useContext(Auth);
    return  (
        <form onSubmit={()=>{
            HandleAuth();
            navigate("/user");
        }}>
            <input type="email" />
            <input type="password" />
            <input type="submit" />
        </form>
    )
}