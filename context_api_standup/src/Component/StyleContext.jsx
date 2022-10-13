import { createContext } from "react";

export const StyleContext = createContext();


export const StyleContextComponent=({children})=>{
    return (
        <StyleContext.Provider value={"masai"}>
         {children}
        </StyleContext.Provider>
    )
}