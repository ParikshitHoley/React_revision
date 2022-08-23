import {createContext} from "react";
import {useState} from "react";
export const Auth = createContext();

export const AuthconText =({children})=>{
const [auth,setAuth] =useState(false);
const HandleAuth =()=>{
    setAuth(true);
}
   return(
    
    <Auth.Provider value={{auth,HandleAuth}}>
        {children}
    </Auth.Provider>
    
    
   )
}

