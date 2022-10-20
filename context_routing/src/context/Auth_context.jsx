import { createContext,useState } from "react";


export const AuthContext=createContext();

export const AuthcontextComponent = ({children})=>{
    const [state,setState] = useState({
        auth:false,
        token:null
    })

    const handleauthChange=(x,value)=>{
        setState({
            ...state,auth:x,token:value
        })
    }

    console.log(state)
    return (
        <AuthContext.Provider value={{state,handleauthChange}}>
           {children}
        </AuthContext.Provider>
    )
}