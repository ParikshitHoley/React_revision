import {Auth} from "./Authcontext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


export const PrivateComponent=({children})=>{ 
    const {auth} = useContext(Auth);

    if(!auth)
    {
        return <Navigate to="/login" />;
    }

    return   {children};
          
    


}