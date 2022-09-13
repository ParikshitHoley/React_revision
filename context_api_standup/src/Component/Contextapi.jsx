// 1 import create contest from react
import { createContext } from "react";
// 2 take one variable and execute it
import {useState} from "react";
export const IncrementContext = createContext();

// 3 step
export const ContextComponent=({children})=>{
    const [count,setCount] = useState(10);

    const HandleChange = (inc)=>{
        setCount(count+inc);
    }
    return (
       < IncrementContext.Provider value={{count,HandleChange}}>
         {children}
       </IncrementContext.Provider>

    )
}